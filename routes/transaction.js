const router = require('express').Router()
const transactionController = require('../controllers/transaction')

router.get('/', transactionController.findAll)
router.get('/:id', transactionController.findById)
router.post('/', transactionController.create)
router.delete('/:id', transactionController.delete)
router.put('/:id', transactionController.update)
router.patch('/:id', transactionController.patch)

module.exports = router