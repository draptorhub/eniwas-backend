const express=require('express')
const router=express.Router()
const checkout=require('../controllers/checkout')

router.post('/create',checkout.create)
// router.get('/list',refBranch.list)
router.get('/gethistory/:bid',checkout.getHistoryData)
router.get('/getbillnum/:bid',checkout.getBillNumber)
// router.delete('/delete',refBranch.delete)

module.exports = router