'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


global.APP_ROOT = require('path').join(_dirname + '/../')
app.use(express.static(APP_ROOT + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// app.get('/', function(request, response, next){
// 	response.send('Fer')
// })

// app.use(function(req, resp, next){
// 	console.log('passei por aqui:', request.url)
// 	next()
// })

app.use('/', require('./route/index.js'))

app.use(function(req, resp, next){
	let err = new Error('não existe')
	err.status = 404
	next(err)
})
app.use(function(err, req, resp, next){
	resp.status(err.status || 500).send(err.message || 'deu ruim')
})

// app.listen(3000)
module.exports = app
