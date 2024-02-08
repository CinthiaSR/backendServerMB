import Blind from "../Models/blind.model";
export class BlindController {
  // Get all blinds
  getAllBlinds = async (req, res, next) => {
    try {
      const getAll = await Blind.find([]);
      res.status(201).json({msm: "Get all blinds", getAll});
      console.log(getAll);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   get only blind
  getByBlind = async (req, res, next) => {
    try {
      const {idBlind} = req.params;
      const infoBlind = await Blind.findById(idBlind);

      if (!infoBlind) {
        console.log("Blind not found");
        res.status(404).json({msm: "Blind not found"});
      } else {
        res.status(201).json({msm: "Get ok!"});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   create new blind
  createBlind = async (req, res, next) => {
    try {
      const {typeBlind} = req.body;
      const newBlind = new Blind({
        typeBlind,
      });
      await newBlind.save();
      res.status(201).json({msm: "Create ok"});
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   Update Blinds
  updateBlind = async (req, res, next) => {
    try {
      const {idBlind} = req.params;
      const bodyParams = {...req.body};
      const blindUpdated = await Blind.findByIdAndUpdate(idBlind, bodyParams, {
        new: true,
      });
      if (!blindUpdated) {
        return res.status(404).json({msm: "Blind not found"});
      } else {
        res.status(201).json({msm: "Blind Update!", blindUpdated});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   Delete Blind
  deleteBlind = async () => {
    try {
      const {idBlind} = req.params;
      const blindDeleted = await Blind.findByIdAndDelete(idBlind);
      if (!blindDeleted) {
        return res.status(404).json({msm: "Blind not found"});
      } else {
        res.status(201).json({msm: "Blind Deleted!"});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };
}
export default new BlindController();
