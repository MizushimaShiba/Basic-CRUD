const router = require('express').Router()
const Item = require('../controllers/item')

router.get('/', Item.findAll)
router.get('/add', Item.showCreate)
router.post('/add', Item.create)
router.get('/edit/:id', Item.showUpdate)
router.post('/edit/:id', Item.update)
router.get('/delete/:id', Item.destroy)

module.exports = router