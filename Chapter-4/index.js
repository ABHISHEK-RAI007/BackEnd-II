const fs = require('fs')
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');

// Server Started 
const server = express();

// Built-in middleware => body-parser
server.use(express.json());
server.use(morgan('default'))
server.use( express.static('public') );


// API - Endpoint - Route 

// Products
// API ROOT, base URL, Example- google.com/api/v2/

// C R U D Operations

// Create-API POST /productS   C R U D
server.post('/products', (req,res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
})

// Read-API GET /products
server.get('/products', (req,res) => {
  res.json(products);
})

// Read-API GET /products/ :id
server.get('/products/:id', (req,res) => {
  const id = +req.params.id;
   const product =  products.find(p => p.id === id)
  res.json(product);
})

// Update  PUT /products/ :id
server.put('/products/:id', (req,res) => {
  const id = +req.params.id;
  const productIndex =  products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1, {...product, ...req.body});
  res.status(201).json();
})

// server.put('/', (req,res) => {
//   res.json({type:'PUT'});
// })

// Update  PATCH /products/ :id
server.patch('/products/:id', (req,res) => {
  const id = +req.params.id;
  const productIndex =  products.findIndex(p => p.id === id);
  products.splice(productIndex,1, {...req.body, id:id});
  res.status(201).json();
})

// Delete DELETE /products/ :id
server.delete('/products/:id', (req,res) => {
  const id = +req.params.id;
  const productIndex =  products.findIndex(p => p.id === id);
  products.splice(productIndex,1);
  res.status(201).json();
})


server.delete('/', (req,res) => {
  res.json({type:'delete'});
})

server.patch('/', (req,res) => {
  res.json({type:'PATCH'});
})

server.get('/demo', (req, res) => {
  // res.send('<h1>Hello World!!</h1> ');

  // res.status(201).send('<h1>Hello World!!</h1> ');

  // res.sendFile('F:/Back-End/Coder Dost-Backend/Chapter-3/index.html')

  // res.json(products);

  // res.sendStatus(404);

  
  
})

// End of Server
server.listen(8080 ,() =>{
  console.log("Server Started");
});

