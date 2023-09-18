const uuid = require("uuid");
const path = require("path");
const { Tender, Tender_Works } = require("../models/models");
const ApiError = require("../error/ApiError");

class TenderController {
  async create(req, res, next) {
    const {
      name,
      tender_description,
      tender_status,
      userId,
      typeTenderId,
      subTypeTenderId,
      info,
    } = req.body;

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
        subTypeTenderId,
        img: fileName,
      }); //

      console.log(info);
      if (info) {
        const infoParse = JSON.parse(info);
        console.log("infoParse   ", infoParse);

        infoParse.forEach((i) =>
          //console.log(i)
          Tender_Works.create({
            title: i.title,
            description: i.description,
            tenderId: tender.id,
            coast: i.coast,
          })
        );
      }

      return res.json(tender);
    } catch (e) {
      console.log("================   ERRROORRR   ===========");
      console.log(info);
      console.log("=================    tender");

      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    try {
      let { typeTenderId, userId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 12;

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
