import {pool} from "../Helpers/database";
export class DbController {
  getAll = async (req, res, next) => {
    try {
      const [rows] = await pool.query("SELECT * FROM rol");
      res.status(200).json(rows);
      // res.json(rows);
    } catch (error) {
      next(error);
      console.log(error);
      res.status(500).send("Error en el servidor");
    }
  };
}
export default new DbController();
