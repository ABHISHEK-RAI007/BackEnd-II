require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

// Server Started 
const server = express();

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


// Built-in middleware => body-parser
server.use(express.json());
server.use(morgan('default'))
server.use( express.static('public') );
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

// MVC => Model-View-Controller
// Model = > Data ke Bussiness Rules/Product Price/Product Ratings 
// View = > Front/Back -End se template generate hota hai ko dikhana => FB
// Controller = > Model & View me jo bhi logic interchange hoga Model => Model kis tarah se view me jayega and kha par jayega => View me changes kaise Model ko effect karenge



// End of Server
server.listen(8080 ,() =>{
  console.log("Server Started");
});

