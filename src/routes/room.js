const express=require('express')
const router=express.Router()
const room=require('../controllers/room')

router.post('/create',room.create)
router.get('/list',room.list)
router.get('/frontlist/:bid',room.frontList)
router.get('/selectoption/:bid',room.selectOption)
router.get('/get/:bid',room.get)
router.put('/update',room.update)
router.put('/updatestat',room.updateStat)
router.delete('/delete',room.delete)

module.exports = router