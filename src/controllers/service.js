const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/services')
sequelize.sync({force:false})

controllers.create = async (req,res) => {

  let sname = req.body.sname;

  const data = await table.create({
    servicesId:'',
    serviceName:sname
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

controllers.frontList = async (req, res) => {

  let branchId = req.params.bid

  var sql = `select * from services where servicesId not in 
            (select serviceId from service_branch where branchId='${branchId}');`

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
    serviceName:req.body.sname,
  },
  {
    where: { 
      servicesId:req.body.sid,
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
  
  const del = await table.destroy({
    where: {
      servicesId:req.body.sid
    }
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

module.exports=controllers