const Router = require('express')
const router = new Router()
const type_tenderController = require('../controllers/type_tenderController')

router.post('/', type_tenderController.create)
router.get('/', type_tenderController.getAll)

module.exports = router


