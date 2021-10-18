const express=require('express')
const router=express.Router()
const login=require('../controllers/login')

router.post('/mngrlogin',login.managerAuthorize)
router.get('/branchdetails/:bid',login.branchDetails)

module.exports = router