const {Type_Tender } =require('../models/models')
const ApiError = require('../error/ApiError')
class Type_TenderController {

    async create(req, res, next) {
        try{

        
            const {title, type_description } = req.body
            const type_tender = await Type_Tender.create({title, type_description})
            return res.json(type_tender)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
           
    
        }
    

    async getAll(req, res) {
        const type_tender = await Type_Tender.findAll()
        return res.json(type_tender)
    }


}

module.exports = new Type_TenderController()