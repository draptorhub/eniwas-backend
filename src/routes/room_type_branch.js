const express=require('express')
const router=express.Router()
const room=require('../controllers/room_type_branch')

router.post('/create',room.create)
router.get('/list',room.list)
router.get('/get/:bid',room.get)
router.put('/update',room.update)
router.delete('/delete',room.delete)

module.exports = router

/*
    create room-type-branch with rtid,bid,cost, rtname insert in two table see inner query to insert it into different table
    list all the values from room_type_branch table
    get particular for bid for select tag id name
    get particular for bid for select tag id name not opted
    get particular bid for table id,name,cost
    update cost of that room_type_branch
    disable that room_type_branch
*/