const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/events_student')
sequelize.sync({force:false})

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

controllers.create = async (req,res) => {
    
    console.log(req.body,new Date())

    const data = await table.create({
      eid:req.body.ieid,
      sid:req.body.isid,
      sdate:new Date().toISOString().slice(0,10),
      is_enabled:'1'
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

controllers.update = async (req,res) => {
    
    console.log(req.params)
    console.log(req.body)

    const data = await table.update({
      is_enabled:req.body.ena_val
    },
    {
      where: { 
        eid: req.params.ieid,
        sid: req.body.isid
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

module.exports=controllers