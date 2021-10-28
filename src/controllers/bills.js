const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/bills')
sequelize.sync({force:false})

controllers.create = async (req,res) => {
    
    //console.log(req.body,new Date())

    const data = await table.create({
      billId:'',
      billDesc:req.body.bdesc,
      billType:req.body.btype,
      payType:req.body.ptype,
      billAmt:req.body.bamt,
      checkinId:req.body.cid
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
      message:"bill Created.",
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
      checkinId:req.params.cid
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

controllers.addServices = async (req, res) => {

  let appendSql = req.body.stmt;

  var sql = `insert into bills(billId,billDesc,billType,billAmt,checkinId,payType) values ${appendSql}`

  let data = await sequelize.query(sql,{
              type: sequelize.QueryTypes.INSERT
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