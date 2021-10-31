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

  var sql = `select lpad(ROW_NUMBER() OVER (ORDER BY co.codatetime asc),5,'0') as row_num,(select roomname from rooms where roomid=ci.roomnumber) as rname,ci.custname,co.checkoutid,
             ci.cidatetime,co.codatetime,DATEDIFF(co.codatetime,ci.cidatetime) as stay,co.cototamt from checkin ci,
             checkout co where ci.checkinid=co.checkinid and ci.branchid='${branchId}' order by co.codatetime desc;`

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