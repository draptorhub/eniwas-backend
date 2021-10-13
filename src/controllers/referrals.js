const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/referrals')
sequelize.sync({force:false})

<<<<<<< Updated upstream
=======
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

controllers.parlist = async (req, res) => {

  let ieid = req.params.evid
  let ieval = req.params.eval

  const data = await table.findAll({
    where:{
      eid:ieid,
      is_enabled:ieval
    },
    attributes:['sid']
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  }); 

  res.json({success : true, data : data});

}

>>>>>>> Stashed changes
controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
<<<<<<< Updated upstream
      reffId:"",
      reffName:req.body.reffName,
      refLogo:req.body.refLogo
=======
      reffId:req.body.reffId,
      reffName:req.body.reffName
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
controllers.delete = async (req, res) => {
  // parameter post
  const { id } = req.params.reffId;
  // delete sequelize
  const del = await Employee.destroy({
    where: { reffId: id}
  })
  res.json({success:true,deleted:del,message:"Deleted successfully"});
}

// git remote set-url origin https://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@github.com/draptorhub/eniwas-backend.git
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
controllers.delete = async (req, res) => {
  
  // delete sequelize
  const del = await table.destroy({
    where: { reffId: req.params.reffid}
  })
  res.json({success:true,deleted:del,message:"Deleted successfully"});
}

=======
>>>>>>> Stashed changes
module.exports=controllers