const express=require('express')
const router=express.Router()
const checkout=require('../controllers/checkout')

router.post('/create',checkout.create)
// router.get('/list',refBranch.list)
router.get('/gethistory/:bid',checkout.getHistoryData)
router.get('/getbillnum/:bid',checkout.getBillNumber)
router.post('/searchbillnum',checkout.searchBillNumber)
router.post('/searchcustomer',checkout.searchCustomer)
router.post('/searchdate',checkout.searchDate)
router.post('/getanalytics',checkout.getAnalytics)
router.post('/checkedoutdata',checkout.getCheckedoutData)
// router.delete('/delete',refBranch.delete)

module.exports = router