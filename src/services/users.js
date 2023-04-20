const getAllUsers = (req, res) => {
  try {
    const { limit, offset } = req.query
    if(limit && offset){
      res.json({
        limit,
        offset
      })
    }else {
      res.send('No params receveid')
    }
  } catch (error) {
    console.log(error)
  }

};

module.exports = {
  getAllUsers
}
