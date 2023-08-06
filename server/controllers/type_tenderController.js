const {Type, Type_Tender} =require('../models/models')
const ApiError = require('../error/ApiError')
class Type_TenderController {

    async create(req, res) {
        async create(req, res){
            const {name} = req.body
            return res.json(Type_Tender)
        }
    }

    async getAll(req, res) {

    }


}

module.exports = new Type_TenderController()