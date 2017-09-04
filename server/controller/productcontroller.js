'use strict'

let ProductController = {
  list: function(req, resp, next) {
    resp.send('..list')
  },
  byId: function(req, resp, next) {
    let ab = req.query.ab
    resp.send('..by Id: ' + req.params.id + 'query:' + ab)
  },
  create: function(req, resp, next) {
    console.log(req.body)
    resp.status(201).send(req.headers)
  },
  update: function(req, resp, next) {
    resp.send('..update')
  },
  delete: function(req, resp, next) {
    resp.status(204).send('..delete')
  }
}

module.exports = ProductController
