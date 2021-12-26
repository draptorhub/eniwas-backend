const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/checkout')
sequelize.sync({force:false})

controllers.create = async (req,res) => {
    
    //console.log(req.body,new Date())

    const data = await table.create({
      checkOutId:'',
      checkInId:req.body.ciid,
      payMode:req.body.paytype,
      cototamt:req.body.tamt
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
      message:"checkout Created.",
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

controllers.get = async (req, res) => {

  const data = await table.findAll({
    where:{
      reffId:req.params.reffid
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

controllers.getHistoryData = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select * from historydata where branchid='${branchId}' order by codatetime desc;`

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

controllers.getAnalytics = async (req, res) => {

  let branchId = req.body.bid;
  let sdate = req.body.sdate;
  let edate = req.body.edate;

  let sql = ''

  if(edate)
    sql = `select * from historydata where branchid='${branchId}' and DATE(codatetime) between '${sdate}' and '${edate}' order by codatetime desc;`
  else
    sql = `select * from historydata where branchid='${branchId}' and DATE(codatetime)='${sdate}' order by codatetime desc;`
    

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

controllers.getBillNumber = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select lpad(count(*)+1,5,'0') as billnum from checkout co,checkin ci where ci.checkinid=co.checkinid and ci.branchId = '${branchId}';`

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

controllers.searchBillNumber = async (req, res) => {

  let branchId = req.body.bid
  let billnum = req.body.bnum

  var sql = `select * from historydata h where binary branchid= binary '${branchId}' and binary row_num= binary '${billnum}' order by codatetime desc;`

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

controllers.getCheckedoutData = async (req, res) => {

  let branchId = req.body.bid
  let checkedoutid = req.body.coid

  var sql = `select checkinid,(select roomTypeName from room_type where roomTypeId = 
    (select roomType from rooms where roomId=roomNumber)) 
    as rtype,custAddr,custGuest,roomCharge,(select reffName from referrals where reffId=custReferral) as custref,(select payMode from checkout where checkoutid='${checkedoutid}') as paymode from checkin where 
    branchId='${branchId}' and checkinid=(select checkinid from checkout where checkoutid='${checkedoutid}');`

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

controllers.searchCustomer = async (req, res) => {

  let branchId = req.body.bid
  let custName = req.body.cname

  var sql = `select * from historydata where binary branchid='${branchId}' and binary
  custname like '%${custName}%' order by codatetime desc;`

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

controllers.searchDate = async (req, res) => {

  let branchId = req.body.bid
  let startDate = req.body.sdate
  let endDate = req.body.edate
  let ctype = String(req.body.ctype)=='true'?true:false;
  console.log("ctype:",ctype,req.body.ctype);

  var sql = `select * from (select lpad(ROW_NUMBER() OVER (ORDER BY co.codatetime asc),5,'0') as row_num,
  (select roomname from rooms where roomid=ci.roomnumber) as rname,ci.custname,co.checkoutid,
  ci.cidatetime,co.codatetime,DATEDIFF(co.codatetime,ci.cidatetime) as stay,co.cototamt from 
  checkin ci, checkout co where ci.checkinid=co.checkinid and ci.branchid='BID-0000000004' order by 
  co.codatetime desc) t `

  let addString = ``

  //if ctype checkout data
  if(ctype){
    if(endDate)
      addString = `where date(t.codatetime)>='${startDate}' && date(t.codatetime)<='${endDate}';`
    else
      addString = `where date(t.codatetime)='${startDate}';`
  }else{
    if(endDate)
      addString = `where date(t.cidatetime)>='${startDate}' && date(t.cidatetime)<='${endDate}';`
    else
      addString = `where date(t.cidatetime)='${startDate}';`
  }

  sql+=addString;

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

controllers.update = async (req,res) => {
    

    const data = await table.update({
      reffName:req.body.reffName,
      refLogo:req.body.refLogo
    },
    {
      where: { 
        reffId:req.body.reffId,
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