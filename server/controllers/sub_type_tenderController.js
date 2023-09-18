const { Sub_Type_Tender } = require("../models/models");
const ApiError = require("../error/ApiError");
class Sub_Type_TenderController {
  async create(req, res, next) {
    try {
      const { title, sub_type_description, typeTenderId } = req.body;
      const sub_type_tender = await Sub_Type_Tender.create({
        title,
        sub_type_description,
        typeTenderId,
      });
      console.log("000  0000");
      console.log(title);
      console.log(sub_type_description);
      console.log("000  0000");
      return res.json(sub_type_tender);
    } catch (e) {
      console.log("111 ");
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { typeTenderId } = req.query;
      console.log("dfs------------=========== ", typeTenderId);
      console.log("dfs-+++++======= ", req.query);
      console.log("dfs------------=========== ");
      const sub_type_tender = await Sub_Type_Tender.findAll();
      console.log("000 11");
      return res.json(sub_type_tender);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new Sub_Type_TenderController();
