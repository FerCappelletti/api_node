const express = require('express');
const app = express();
const port = 3000;
const users = require('./src/routes/users.js');
const products = require('./src/routes/products');


/* routes */
/* users */

app.use(express.json())

app.get('/', function (req, res) {
  res.status(200).json({"msj": "hola mundo"})
})

/* routes */
/* users */
app.use('/users', users)

/* products */
app.use('/products', products)

// const orders = require('./routes/orders')
// app.use('/orders', orders)

// const home = require('./routes/home')
// app.use('/home', home)


app.listen(port, () => {
  console.log(`Server running on ${port}`)
}).on('error', function(err) {
  console.log(err)
  process.exit(1);
});

module.exports = app
