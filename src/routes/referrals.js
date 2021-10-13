const express=require('express')
const router=express.Router()
<<<<<<< Updated upstream
const referrals=require('../controllers/referrals')

router.post('/create',referrals.create)
router.get('/get/:reffid',referrals.get)
router.get('/list',referrals.list)
router.put('/update',referrals.update)
router.delete('/delete/:reffid',referrals.delete)
=======
const refferals=require('../controllers/referrals')

router.get('/list',refferals.list)
router.get('/parlist/:evid/:eval',refferals.parlist)
// router.get('/list/:cuid/:eid',refferals.plist)
router.post('/create',refferals.create)
router.put('/enabordisa/:ieid',refferals.update)
>>>>>>> Stashed changes

module.exports = router