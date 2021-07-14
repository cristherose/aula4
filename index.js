const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/fotos', (req, res)=>{
    res.render ('fotos', {nome: req.query.nome})
})

app.get('/cachorros', (req, res)=>{
    res.send ('<html><body><h1>Cheguei na rota de cachorros!</h1></body></htm')
})

app.post('/', (req, res)=>{
    res.send ('Respondendo requisicao POST!')
})

app.post('/cachorros', (req, res)=>{
    res.send ('Adotando um novo cachorro')
})




app.listen(8080, () =>{
    console.log('iniciando o servidor express')
})

//const server = http.createServer((req, res)=> {
//    if(req.method === 'GET') {
//        if(req.url === '/fotos'){
//        res.writeHead(200)
//        res.end('<html><body><h1>Cheguei na rota de fotos!</h1></body></html>')
//        }else if(req.url ==='/cachorros'){
//            res.writeHead(200)
//            res.end('<html><body><h1>Cheguei na rota dos cachorros!</h1></body></html>')
//        }else{ 
//            res.writeHead(400)
//            res.end('<html><body><h1>Nao encontrei uma rota!</h1></body></html>')
//        }
//    } else if (req.method === 'POST') {
//        res.writeHead(200)
//        res.end('Respondendo requisicao POST!')
//    }else if(req.method === 'PUT'){
//        res.writeHead(200)
//        res.end('Respondendo requisicao PUT!')
//    }else if(req.method === 'DELETE'){
//        res.writeHead(200)
//        res.end('Respondendo requisicao DELETE!')
//    }else{
//            res.writeHead(400)
//            res.end('Nao sei tratar esse metodo HTTP: ${req.method}')
//    }
//})
//
//server.listen(8080)