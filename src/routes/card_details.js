const express=require('express')
const router=express.Router()
const cards=require('../controllers/card_details')

router.post('/create',cards.create)
router.post('/createauto',cards.createAuto)
//router.get('/get/:cid',bills.get)
// router.get('/list',refBranch.list)
// router.delete('/delete',refBranch.delete)

module.exports = router