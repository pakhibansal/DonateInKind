const route = require('express').Router()
const passport = require('passport')

route.get('/',(req,res)=>{
    res.render('login')
})

route.post('/',passport.authenticate('local',{
    successRedirect:'/donate',
    failureRedirect:'/login'
}))

route.get('/facebook',passport.authenticate('facebook')) // yeh facebook ke pass bhej deta hai
route.get('/twitter',passport.authenticate('twitter'))

route.get('/facebook/callback',
    passport.authenticate('facebook',{
        successRedirect:'/donate',
        failureRedirect:'/login'
    })
)
route.get('/twitter/callback',
    passport.authenticate('twitter',{
        successRedirect:'/donate',
        failureRedirect:'/login'
    })
)
// to login from facebook

module.exports={route}