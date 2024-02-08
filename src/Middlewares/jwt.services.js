import jwt from "jsonwebtoken";

class JWTServices {
  sign(payload, expiry = "24h", secret = process.env.JWT_SECRET) {
    return jwt.sign(payload, secret, {expiresIn: expiry});
  }
  verify(token, secret = process.env.JWT_SECRET) {
    const resultVerify = jwt.verify(token, secret);
    return resultVerify;
  }
}
export default new JWTServices();
