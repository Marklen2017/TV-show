const dataJSON = require('./public/JSON/data.json')

const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(dataJSON)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/customurl/*': '/$1'
    }))
server.use(router) 
server.listen(8080, () => {
    console.log('JSON Server is running')
})