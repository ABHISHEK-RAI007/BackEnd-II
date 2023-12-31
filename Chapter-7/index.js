require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');


// Server Started 
const server = express();

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
console.log('env',process.env.DB_PASSWORD)

// db connection
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Schema = Configuration of products/elements


// Built-in middleware => body-Parser
server.use(express.json());
server.use(morgan('default'))
server.use( express.static(process.env.PUBLIC_DIR) );
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);



// End of Server
server.listen(process.env.PORT, () => {
  console.log('server started');
});

