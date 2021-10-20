const express=require('express')
const router=express.Router()
const checkin=require('../controllers/checkin')

router.post('/create',checkin.create)
// router.get('/list',refBranch.list)
// router.get('/get/:bid',refBranch.get)
// router.delete('/delete',refBranch.delete)

module.exports = router