const express=require('express')
const router=express.Router()
const owner=require('../controllers/owner')

router.get('/list',owner.list)

module.exports = router