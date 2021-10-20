require('dotenv').config()

const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const owner=require('./src/routes/owner')
const referrals=require('./src/routes/referrals')
const referral_branch=require('./src/routes/referral_branch')
const login=require('./src/routes/login')
const room=require('./src/routes/room')
const room_type_branch=require('./src/routes/room_type_branch')
const checkin=require('./src/routes/checkin')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('port',process.env.port||3000)
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/owner',owner)
app.use('/api/referrals',referrals)
app.use('/api/ref-branch',referral_branch)
app.use('/api/login',login)
app.use('/api/room',room)
app.use('/api/roomtypebranch',room_type_branch)
app.use('/api/checkin',checkin)

app.use('/',(req,res) => {
    res.send("Hello World from node.js server")
})

app.listen(app.get('port'),() => {
    console.log("starting node.js server")
})