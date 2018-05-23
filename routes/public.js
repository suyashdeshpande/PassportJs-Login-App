const route = require('express').Router()

route.get('/',(req,res)=>{
	res.send("Visible all users")
})

exports = module.exports = route