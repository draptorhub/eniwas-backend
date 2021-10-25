const express=require('express')
const router=express.Router()
const checkin=require('../controllers/checkin')

router.post('/create',checkin.create)
// router.get('/list',refBranch.list)
// router.get('/get/:bid',refBranch.get)
router.post('/coutdata',checkin.getCheckoutData)
router.post('/custdata',checkin.getCustomerData)
router.post('/changeroom',checkin.changeRoom)
router.get('/revisedata/:bid',checkin.getReviseData)
// router.delete('/delete',refBranch.delete)

module.exports = router