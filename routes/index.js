const router = require('express').Router()
const book = require('../routes/book')
const member = require('../routes/member')
const transaction = require('../routes/transaction')


router.use('/books', book)
router.use('/members', member)
router.use('/transactions', transaction)


module.exports = router