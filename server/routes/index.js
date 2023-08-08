const Router = require('express')
const router = new Router()

const tenderRouter = require('./tenderRouter')
const userRouter = require('./userRouter')
const type_tenderRouter = require('./type_tenderRouter')
const cabinetRouter = require('./cabinetRouter')

router.use('/user', userRouter)
router.use('/cabinet', cabinetRouter)
router.use('/tender', tenderRouter)
router.use('/type_tender', type_tenderRouter)

module.exports = router