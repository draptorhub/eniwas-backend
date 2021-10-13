const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/referral_branch')
sequelize.sync({force:false})

controllers.create = async (req,res) => {

  const data = await table.create({
    branchId:req.body.bid,
    reffId:req.body.rid
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

controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await table.destroy({
    where: {
      branchId:req.body.bid,
      reffId:req.body.rid
    }
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

module.exports=controllers