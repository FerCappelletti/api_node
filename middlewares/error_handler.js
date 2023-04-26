
const errorLogs = (err, req, res, next) => {
  console.log('error logs')
  console.log(err)
  next(err)
}

const handlerError = (err, req, res, next) => {
  console.log('error handler error')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = {
  errorLogs,
  handlerError
}
