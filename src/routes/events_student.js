const express=require('express')
const router=express.Router()
const so_con=require('../controllers/events_student')

router.get('/list',so_con.list)
router.get('/parlist/:evid/:eval',so_con.parlist)
// router.get('/list/:cuid/:eid',so_con.plist)
router.post('/create',so_con.create)
router.put('/enabordisa/:ieid',so_con.update)

module.exports = router