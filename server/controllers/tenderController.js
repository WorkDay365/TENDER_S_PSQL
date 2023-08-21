const uuid = require('uuid')
const path = require('path')
const {Tender} = require('../models/models')
const ApiError = require('../error/ApiError')

class TenderController {

    async create(req, res, next) {
        console.log('CreateTender ')
       // console.log(req )
        console.log('*********************' )
        //console.log(res )
        console.log('******************' )
       
        console.log('CreateTender try')
        const {name, tender_description, tender_status, userId, typeTenderId } = req.body
        console.log(name, tender_description, tender_status, userId, typeTenderId  )
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
  
         img.mv(path.resolve(__dirname, '..', 'static', fileName))
         
         try{
        const tender = await Tender.create({name, tender_description, tender_status , userId, typeTenderId, img:fileName}) //
  
        const  tt_tt =  res.json(tender)
        console.log('--------------------')  
        console.log(tt_tt)  
        console.log('--------------------')   
        return res.json(tender)

    }catch(e){
        console.log('CreateTender error')
     //   console.log(req )
        console.log('*********************' )
      //  console.log(res )
        console.log('******************' )
        next(ApiError.badRequest(e.message))
    }
    }
    async getAll(req, res, next) {
        try{
        let {typeTenderId, userId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        console.log(typeTenderId)
        console.log(userId)
        let offset = page * limit - limit
        let tenders;
        
        if (!typeTenderId && !userId) {
            console.log('1')
            tenders = await Tender.findAndCountAll ({limit, offset})
            console.log('11')
        }
        if (typeTenderId && !userId) {
            console.log('2')
            tenders = await Tender.findAndCountAll({where:{typeTenderId}, limit, offset })
            console.log('22')
        }
        if (!typeTenderId && userId) {
            console.log('3')
            tenders = await Tender.findAndCountAll({where:{userId}, limit, offset })
            console.log('33')
        }
        if (typeTenderId && userId) {
            console.log('4')
            tenders = await Tender.findAndCountAll({where:{typeTenderId, userId}, limit, offset })
            console.log('44')
        }

        return res.json(tenders)
    }catch(e){
        next(ApiError.badRequest(e.message))
    }
    }

    async getOne(req, res) {
        const {id} = req.params
        const tender = await Tender.findOne(
            {
                where: {id},

            },

        )
        return res.json(tender) 
    }
}

module.exports = new TenderController()