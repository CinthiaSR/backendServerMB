export class TestController {
  getText = (req, res, next) => {
    try {
      res.end("mensaje desde test de controller");
    } catch (error) {
      next(error);
    }
  };
}
export default new TestController();
