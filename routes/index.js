const router = require('express').Router()
const Controller = require('../controllers/controller')
const item = require('./item')

router.get('/', Controller.home)
router.use('/item', item)

module.exports = router