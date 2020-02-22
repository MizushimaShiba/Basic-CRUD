const {Item} = require('../models/index')


module.exports = class Controller{
  static findAll(req, res) {
    Item.findAll()
      .then(data => res.render('item', {data}))
      .catch(err => res.send(err))
  }
  
  static showCreate(req, res) {res.render('add-item')}

  static create(req, res) {
    Item.create(req.body)
      .then(data => res.redirect('/item'))
      .catch(err => res.send(err))
  }

  static showUpdate(req, res) {
    Item.findByPk(req.params.id)
      .then(data => res.render('update-item', {data}))
      .catch(err => res.send(err))
  }

  static update(req, res) {
    Item.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(data => res.redirect('/item'))
      .catch(err => res.send(err))
  }

  static destroy(req, res) {
    Item.destroy({
      where: {
        id : req.params.id
      }
    })
      .then(data => res.redirect('/item'))
      .catch(err => res.send(err))
  }
}