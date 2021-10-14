const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/rooms')
sequelize.sync({force:false})

controllers.create = async (req,res) => {

  const data = await table.create({
    roomId:'',
    roomName:req.body.rname,
    roomType:req.body.rtid,
    roomStat:0,
    branchId:req.body.bid,
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
    attributes: ['roomId','roomName','roomStat']
  })
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

  var sql = `select r.roomId,r.roomName,(select roomTypeName from room_type 
             where roomTypeId=r.roomType) as rtname,r.roomType,rtb.roomTypeCost 
             from rooms r,room_type_branch rtb where r.branchId=rtb.branchId 
             and r.roomType=rtb.roomTypeId and r.branchId='${branchId}';`

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
    roomName:req.body.rname,
    roomType:req.body.rtid
  },
  {
    where: { 
      roomId:req.body.rid,
      branchId:req.body.bid
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
    roomStat:req.body.rstat,
  },
  {
    where: { 
      roomId:req.body.rid,
      branchId:req.body.bid
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
      roomId:req.body.rid
    }
  })
  res.json({success:true,deleted:del,message:"Deleted successful"});
}

module.exports=controllers