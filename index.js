// api-routes.js
const express = require('express')
const jsonServer = require('json-server')

const router = express()
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const v1Router = jsonServer.router('db.json')


router.use('/api', v1Router)
router.use(middlewares);
router.listen(3000,()=>{
console.log("running ")
})
