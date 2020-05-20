
const express = require('express')
const app = express()
const {db,Users}= require('./db')
const session = require('express-session')
const passport = require('./passport')
const hbs=require('hbs')
const path=require('path')

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(path.join(__dirname,'/partials'))

app.use(session({
    secret: 'ajshbkabdakdabdnmasbdkmadahjdbjadm,abdmabdbqhjkd',
    resave: false,
    saveUninitialized: true,
  }))

app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req,res)=>{
    res.render('firstpage')
})
app.get('/firstpage',(req,res)=>{
    res.render('firstpage')
})
app.get('/donate',(req,res)=>{
    res.render('donate',{cuser:req.user})
})
app.get('/cloth',(req,res)=>{
    res.render('cloth',{cuser:req.user})
})
app.get('/house',(req,res)=>{
    res.render('house',{cuser:req.user})
})
app.get('/books',(req,res)=>{
    res.render('books',{cuser:req.user})
})

app.use('/login',require('./routes/login').route)
app.use('/signup',require('./routes/signup').route)
app.use('/donate',require('./routes/donate').route)



app.get('/',(req,res)=>{
    if(!req.user){
        return res.redirect('/login')
    }
    res.redirect('/donate')
})




db.sync({alter:true})
    .then(()=>{
        app.listen(4444,()=>{
            console.log('http://localhost:4444')
        })
    })






















  
            