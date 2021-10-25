const express=require('express')
const router=express.Router()
const bills=require('../controllers/bills')

router.post('/create',bills.create)
router.get('/get/:cid',bills.get)
// router.get('/list',refBranch.list)
// router.delete('/delete',refBranch.delete)

module.exports = router