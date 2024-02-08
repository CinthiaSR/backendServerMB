import {RecaptchaEnterpriseServiceClient} from "@google-cloud/recaptcha-enterprise";
// Configurar la variable de entorno para las credenciales
process.env.GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "../../credentials.json";

// Imprimir la ruta de las credenciales para verificar
console.log(
  `La ruta de las credenciales es: ${process.env.GOOGLE_APPLICATION_CREDENTIALS}`
);

export class Recaptcha {
  getRecaptcha = async (req, res, next) => {
    // try {
    try {
      const {projectID, siteKey, token} = req.body;
      // console.log("projectID", projectID);
      // console.log("recaptchaKey", recaptchaKey);
      // console.log("token", token);
      // console.log("recaptcha Action", recaptchaAction);
      // Crea el cliente de reCAPTCHA.
      const client = new RecaptchaEnterpriseServiceClient();
      const projectPath = client.projectPath(projectID);
      const request = {
        assessment: {
          event: {
            token: token,
            siteKey: siteKey,
          },
        },
        parent: projectPath,
      };
      const [response] = await client.createAssessment(request);

      // Verifica si el token es válido.
      if (!response.tokenProperties.valid) {
        console.log(
          `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
        );
        res.status(400).json({error: "Invalid token"});
        return;
      } else {
        console.log(
          `The CreateAssessment call sucess because the token was: ${response.tokenProperties.valid}`
        );
      }
      // Verifica si se ejecutó la acción esperada.
      if (response.tokenProperties.action === recaptchaAction) {
        console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
        response.riskAnalysis.reasons.forEach((reason) => {
          console.log(reason);
        });

        res.json({score: response.riskAnalysis.score});
      } else {
        console.log(
          "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
        );
        res.status(400).json({error: "Action mismatch"});
      }
    } catch (error) {
      next(error);
    }
  };
}
export default new Recaptcha();
