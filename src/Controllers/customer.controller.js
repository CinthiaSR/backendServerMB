import Customer from "../Models/client.model";
export class CustomerController {
  // Get all customers
  getAllCustomers = async (req, res, next) => {
    try {
      const getAll = await Customer.find({});
      res.status(201).json({msm: "Get all user", getAll});
      console.log(getAll);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  // Get only one Customer

  getByCustomer = async (req, res, next) => {
    try {
      const {idCustomer} = req.params;
      const infoCustomer = await Customer.findById(idCustomer);
      if (!infoCustomer) {
        console.log("Customer not found");
        return res.status(404).json({msm: "Customer not found"});
      } else {
        res.status(201).json({msm: "Get Customer", infoCustomer});
      }
    } catch (error) {
      next(error);
      console, log(error);
    }
  };

  //   Create nuew Customer
  createCustomer = async (req, res, next) => {
    try {
      const {name, type, phone, nationality} = req.body;
      const newCustomer = new Customer({
        name,
        type,
        phone,
        nationality,
      });
      await newCustomer.save();
      res.status(201).json({msm: "Create new customer", newCustomer});
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   update customer
  updateCustomer = async (req, res, next) => {
    try {
      const {idCustomer} = req.params;
      const bodyParams = {...req.body};
      const customerUpdate = await Customer.findByIdAndUpdate(
        idCustomer,
        bodyParams,
        {new: true}
      );

      if (!customerUpdate) {
        return res.status(404).json({msm: "Customer not update"});
      } else {
        res.status(201).json({msm: "Update complete", customerUpdate});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   Delete customer

  deleteCustomer = async (req, res, next) => {
    try {
      const {idCustomer} = req.params;
      const customerDelete = await Customer.findByIdAndDelete(idCustomer);

      if (!customerDelete) {
        return res.status(404).json({msm: "Customer not delete"});
      } else {
        res.status(201).json({msm: "Customer Deleted", customerDelete});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };
}
export default new CustomerController();
