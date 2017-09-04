'use strict'

const router = require('express').Router()
const ProductController = require('../controller/ProductController')
router.get('/products', ProductController.list)
router.get('/products/:id', ProductController.byId)
router.post('/products', ProductController.create)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)

module.exports = router
