const uuid = require('uuid')
const path = require('path')
const {Tender} = require('../models/models')
const ApiError = require('../error/ApiError')

class TenderController {

    async create(req, res, next) {
        try{
        const {name, tender_description, tender_status, userId, typeTenderId } = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
  
         img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const device = await Tender.create({name, tender_description, tender_status , userId, typeTenderId, img:fileName}) //
  

        return res.json(device)

    }catch(e){
        next(ApiError.badRequest(e.message))
    }
    }
    async getAll(req, res, next) {
        try{
        const {typeTenderId, userId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        console.log(typeTenderId)
        console.log(userId)
        let offset = page * limit - limit
        let tenders;
        if (!typeTenderId && !userId) {
            console.log('1')
            tenders = await Tender.findAll({limit, offset})
            console.log('11')
        }
        if (typeTenderId && !userId) {
            console.log('2')
            tenders = await Tender.findAll({where:{typeTenderId}, limit, offset })
            console.log('22')
        }
        if (!typeTenderId && userId) {
            console.log('3')
            tenders = await Tender.findAll({where:{userId}, limit, offset })
            console.log('33')
        }
        if (!typeTenderId && userId) {
            console.log('4')
            tenders = await Tender.findAll({where:{typeTenderId, userId}, limit, offset })
            console.log('44')
        }

        return res.json(tenders)
    }catch(e){
        next(ApiError.badRequest(e.message))
    }
    }

    async getOne(req, res) {

    }
}

module.exports = new TenderController()