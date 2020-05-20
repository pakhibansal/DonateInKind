const route = require('express').Router()
route.get('/',(req,res)=>{
    res.render('donate',{
        user:req.user // Kaha se aaya ?Usse aise jab passport chalta hai toh its passports
        // responsibililty ki kaise aaya, vo hume req.user ke through de deta h
    })
})
module.exports = {route}