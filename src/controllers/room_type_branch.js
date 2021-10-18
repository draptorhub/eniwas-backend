const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/room_type_branch')
sequelize.sync({force:false})

controllers.create = async (req,res) => {

  const data = await table.create({
    roomTypeId:req.body.rtid,
    branchId:req.body.bid,
    roomTypeCost:req.body.rtcost
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

  let branchId = req.params.bid

  let sql = `SELECT rt.roomTypeId,rt.roomTypeName FROM room_type_branch rtb,room_type rt 
             where rtb.roomTypeId=rt.roomTypeId and rtb.branchId='${branchId}';`

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
    roomTypeCost:req.body.rtcost
  },
  {
    where: { 
      roomTypeId:req.body.rtid,
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