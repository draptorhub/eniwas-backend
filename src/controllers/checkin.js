const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/checkin')
sequelize.sync({force:false})

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
      checkinId:'',
      custName:req.body.cname,
      custReferral:req.body.cref,
      custMobile:req.body.cmob,
      custMail:req.body.cmail,
      custNational:req.body.cnat,
      custPurpose:req.body.cpurp,
      custAddr:req.body.caddr,
      custDays:req.body.cdays,
      custGuest:req.body.cque,
      paymentMode:req.body.cpay,
      ratePlan:req.body.rplan,
      roomNumber:req.body.rnum,
      branchId:req.body.bid,
      roomCharge:req.body.rcost,
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      console.log("Error "+error)
      return error;
    })
    // return res
    res.status(200).json({
      success: true,
      message:"Referral Created.",
      data: data
    });
}

controllers.list = async (req, res) => {

  const data = await table.findAll()
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  }); 

  res.json({success : true, data : data});

}

//

controllers.getCheckoutData = async (req, res) => {

  let branchId = req.body.bid
  let roomNum = req.body.rid

  var sql = `select checkinid,(select roomName from rooms where roomId=roomNumber) 
             as rname,(select roomTypeName from room_type where roomTypeId = (select roomType from rooms where roomId=roomNumber)) 
             as rtype,custName,CONCAT("",ciDatetime) as cidt,custAddr,custGuest,
             (select refLogo from referrals where reffId=custReferral) as custref,
             roomCharge from checkin where branchId='${branchId}' and 
             roomNumber='${roomNum}' order by ciDatetime desc limit 1;`

  let data = await sequelize.query(sql,{
              type: sequelize.QueryTypes.SELECT
            })
            .then(function(data){
              return data;
            })
            .catch(error => {
              return error;
            }); 

      res.json({data : data});

}

controllers.getCustomerData = async (req, res) => {

  let branchId = req.body.bid
  let roomNum = req.body.rid

  var sql = `select checkinid,(select roomName from rooms where roomId=roomNumber) 
  as rname,roomNumber,custName from checkin where branchId='${branchId}' and 
  roomNumber='${roomNum}' order by ciDatetime desc limit 1`

  let data = await sequelize.query(sql,{
              type: sequelize.QueryTypes.SELECT
            })
            .then(function(data){
              return data;
            })
            .catch(error => {
              return error;
            }); 

      res.json({data : data});

}

controllers.changeRoom = async (req, res) => {

  let custId = req.body.ciid;
  let branId = req.body.bid;
  let roomNum = req.body.rid;

  const data = await table.update({
    roomNumber:roomNum
  },
  {
    where: { 
      checkinId:custId,
      branchId:branId
    }
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Room Change Successful."});

}

controllers.getReviseData = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select checkinId,roomNumber,(select roomName from rooms where 
             roomId=roomNumber) as rname,custName,roomCharge,CONCAT('',ciDatetime) 
             as cidt from checkin where checkinid not in (select checkinid from checkout) 
             and branchId='${branchId}' order by ciDatetime desc;`

  let data = await sequelize.query(sql,{
              type: sequelize.QueryTypes.SELECT
            })
            .then(function(data){
              return data;
            })
            .catch(error => {
              return error;
            }); 

      res.json({data : data});

}

controllers.get = async (req, res) => {

  const data = await table.findAll({
    where:{
      checkinId:req.params.ciid
    }
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  }); 

  res.json({success : true, data : data});

}

controllers.update = async (req,res) => {
    

    const data = await table.update({
      custName:req.body.cname,
      custReferral:req.body.cref,
      custMobile:req.body.cmob,
      custMail:req.body.cmail,
      custNational:req.body.cnat,
      custPurpose:req.body.cpurp,
      custAddr:req.body.caddr,
      custDays:req.body.cdays,
      custGuest:req.body.cque,
      ratePlan:req.body.rplan,
      roomCharge:req.body.rcost,
    },
    {
      where: { 
        checkinId:req.body.ciid
      }
    })
    .then( function(data){
      return data;
    })
    .catch(error => {
      return error;
    }) 
    res.json({success:true, data:data, message:"Updated successful"});
}

controllers.delete = async (req, res) => {
  
  // delete sequelize
  const del = await table.destroy({
    where: { reffId: req.params.reffid}
  })
  res.json({success:true,deleted:del,message:"Deleted successfully"});
}

module.exports=controllers