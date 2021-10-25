const express=require('express')
const router=express.Router()
const service_branch=require('../controllers/service_branch')

router.post('/create',service_branch.create)
router.get('/list',service_branch.list)
router.get('/frontlist/:bid',service_branch.frontList)
router.get('/fronttable/:bid',service_branch.frontTable)
router.get('/get/:bid',service_branch.get)
router.put('/update',service_branch.update)
router.put('/updatestat',service_branch.updateStat)
router.delete('/delete',service_branch.delete)

module.exports = router