const express=require('express')
const router=express.Router()
const referrals=require('../controllers/referrals')

router.post('/create',referrals.create)
router.get('/get/:reffid',referrals.get)
router.get('/list',referrals.list)
router.put('/update',referrals.update)
router.delete('/delete/:reffid',referrals.delete)

module.exports = router