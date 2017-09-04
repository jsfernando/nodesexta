'use strict'

let MainController = {

  home: function(request, response, next){
   response.send('controller home -  ROUTER')
 },
  create: function(request, response, next){
   response.status(201).send('controller create - ROUTER') // para post - criar o status 201
 }

}

module.exports = MainController
