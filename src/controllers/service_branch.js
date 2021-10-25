const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/service_branch')
sequelize.sync({force:false})

controllers.create = async (req,res) => {

  const data = await table.create({
    branchId:req.body.bid,
    serviceId:req.body.sid,
    serviceCost:req.body.scost,
    serviceEnabled:req.body.sstat,
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
    message:"Saved Successfully",
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
      branchId:req.params.bid
    },
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  }); 

  res.json({success : true, data : data});

}

controllers.frontTable = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select serviceId,(select serviceName from services where 
             servicesId=serviceId) as sname,serviceCost,serviceEnabled 
             from service_branch where branchId='${branchId}';`

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

controllers.frontList = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select serviceId,(select serviceName from services where 
    servicesId=serviceId) as sname,serviceCost from service_branch where 
    branchId='${branchId}' and serviceEnabled=1;`

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
    serviceCost:req.body.scost,
    serviceEnabled:req.body.sstat
  },
  {
    where: { 
      branchId:req.body.bid,
      serviceId:req.body.sid
    }
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
    message:"Updated Successfully",
    data: data
  });
}

controllers.updateStat = async (req,res) => {

  const data = await table.update({
    serviceEnabled:req.body.sstat
  },
  {
    where: { 
      branchId:req.body.bid,
      serviceId:req.body.sid
    }
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
    message:"Updated Successfully",
    data: data
  });
}

controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await table.destroy({
    where: {
      branchId:req.body.bid,
      serviceId:req.body.sid
    }
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

module.exports=controllers