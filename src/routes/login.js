const express=require('express')
const router=express.Router()
const login=require('../controllers/login')

router.post('/mngrlogin',login.managerAuthorize)

module.exports = router