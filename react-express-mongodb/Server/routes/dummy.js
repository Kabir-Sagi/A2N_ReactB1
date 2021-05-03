   var express1 =require('express')
  var router =  express1.Router()

     router.get('/get1',function(request,response){
          response.send({
              name:"Sagar",
              city:[
                  {
                      number:999999
                  },
                  {
                      number:888888
                  }
              ]
          })

     })

     router.get('/get2',function(request,response){
        response.send("Welcome to Express JS With ReactJS")
     })

     

  module.exports = router

  