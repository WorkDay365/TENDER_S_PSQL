const Router = require('express')
const router = new Router()
const tenderController = require('../controllers/tenderController')

router.post('/', tenderController.create)
router.get('/', tenderController.getAll)
router.get('/:id', tenderController.getOne)


module.exports = router