const express=require('express')
const router=express.Router()
const service=require('../controllers/service')

router.post('/create',service.create)
router.get('/list',service.list)
router.get('/frontlist/:bid',service.frontList)
router.put('/update',service.update)
router.delete('/delete',service.delete)

module.exports = router