const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/referrals')
sequelize.sync({force:false})

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
      reffId:"",
      reffName:req.body.reffName,
      refLogo:req.body.refLogo
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