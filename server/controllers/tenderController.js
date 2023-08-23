const uuid = require("uuid");
const path = require("path");
const { Tender } = require("../models/models");
const ApiError = require("../error/ApiError");

class TenderController {
  async create(req, res, next) {
    const { name, tender_description, tender_status, userId, typeTenderId } =
      req.body;

    try {
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";

      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const tender = await Tender.create({
        name,
        tender_description,
        tender_status,
        userId,
        typeTenderId,
        img: fileName,
      }); //

      return res.json(tender);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    try {
      let { typeTenderId, userId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      console.log(userId);
      let offset = page * limit - limit;
      let tenders;

      if (!typeTenderId && !userId) {
        tenders = await Tender.findAndCountAll({ limit, offset });
      }
      if (typeTenderId && !userId) {
        tenders = await Tender.findAndCountAll({
          where: { typeTenderId },
          limit,
          offset,
        });
      }
      if (!typeTenderId && userId) {
        tenders = await Tender.findAndCountAll({
          where: { userId },
          limit,
          offset,
        });
      }
      if (typeTenderId && userId) {
        tenders = await Tender.findAndCountAll({
          where: { typeTenderId, userId },
          limit,
          offset,
        });
      }

      return res.json(tenders);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const tender = await Tender.findOne({
      where: { id },
    });
    return res.json(tender);
  }
}

module.exports = new TenderController();
