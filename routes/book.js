const router = require('express').Router()
const bookController = require('../controllers/book')

router.get('/', bookController.findAll)
router.get('/:id', bookController.findById)
router.post('/', bookController.create)
router.delete('/:id', bookController.delete)
router.put('/:id', bookController.update)

module.exports = router