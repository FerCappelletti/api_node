const express = require('express');
const apiRouter = require('./server');
const cors = require('cors')
const {errorLogs, handlerError} = require('./middlewares/error_handler')
const app = express();
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

app.get('/',(req, res)=> {
  res.status(200)
})

apiRouter(app)



app.use(errorLogs)
app.use(handlerError)

app.listen(port, (req, res)=>{
  console.log(`Listening on port ${port}`)
})
