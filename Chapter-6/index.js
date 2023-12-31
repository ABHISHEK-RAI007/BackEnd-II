require('dotenv').config()
const express = require('express');
const morgan = require('morgan');


// Server Started 
const server = express();

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
console.log('env',process.env.DB_PASSWORD)


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

