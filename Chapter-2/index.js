const http = require('http')
const fs = require('fs')

// const data = {age:5};
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const product = data.products[0]
const products = data.products;
 

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    if(req.url.startsWith('/product')){
        const id  = req.url.split('/')[2]
        const product = products.find( p=>p.id === (+id ) ) 
        console.log(product);
        res.setHeader('Content-Type', 'text/html');
            const modifiedindex = index.replace('**title**', product.title).
            replace('**url**', product.thumbnail).
            replace('**price**', product.price).
            replace('**price**', product.rating)
               // res.end(data);
            res.end(modifiedindex);
            return;
    }

    //  '/product':
    //         res.setHeader('Content-Type', 'text/html');
    //         const modifiedindex = index.replace('**title**', product.title).
    //         replace('**url**', product.thumbnail).
    //         replace('**price**', product.price).
    //         replace('**price**', product.rating)
    //         // res.end(data);
    //         res.end(modifiedindex);
    //     break;

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            res.end(index);
            break;

        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        break;

        

        default:
            res.writeHead(404,' NT FOUND');
            res.end()
            // break;
    }
    
    console.log("Server Started");

    // res.setHeader('Dummy', 'DummyValue')
    // res.setHeader('Content-Type', 'application/json')
    // res.setHeader('Content-Type', 'text/html')
    // res.setHeader('Content-Type', 'application/json');

    // res.end(JSON.stringify(data))
    // res.end(index);
    // res.end(data);
})

server.listen(8080)


