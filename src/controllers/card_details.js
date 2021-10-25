const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/card_details')
sequelize.sync({force:false})

controllers.create = async (req,res) => {
    
    //console.log(req.body,new Date())

    const data = await table.create({
      transId:req.body.tid,
      cardNumber:req.body.cnum
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
      message:"card added",
      data: data
    });
}

controllers.createAuto = async (req, res) => {

  let customerId = req.body.ciid
  let cardNumber = req.body.cnum;

  var sql = `insert into card_details values((select billId from bills where 
             checkinId='${customerId}' order by billDatetime desc 
             limit 1),'${cardNumber}');`

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