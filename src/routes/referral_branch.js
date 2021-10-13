const express=require('express')
const router=express.Router()
const refBranch=require('../controllers/referral_branch')

router.post('/create',refBranch.create)
router.get('/list',refBranch.list)
router.get('/get/:bid',refBranch.get)
router.delete('/delete',refBranch.delete)

module.exports = router