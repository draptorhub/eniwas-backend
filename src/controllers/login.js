const controllers={}

const sequelize=require('../models/database')
sequelize.sync({force:false})

controllers.managerAuthorize = async (req, res) => {

  let mngrId = req.body.mid
  let mngrPass = req.body.mpass
  let branchId = req.body.bid

  var sql = `select b.branchId,m.mngrId from branches b,manager m 
             where m.mngrId=b.managerId and m.mngrId='${mngrId}' 
             and m.mngrPass='${mngrPass}' and b.branchId='${branchId}';`

  let data = await sequelize.query(sql,{
              type: sequelize.QueryTypes.SELECT
            })
            .then(function(data){
              return data;
            })
            .catch(error => {
              return error;
            }); 

  if(data.length>0)
      res.json({success : true});
  else
      res.json({success : false});

      //res.json({data : data});

}

controllers.branchDetails = async (req, res) => {

  let branchId = req.params.bid

  let sql = `select branchName as bname,(select hotelName from hotel 
             where hotelId = b.hotelId) as hname,(select hotelLogo from hotel 
              where hotelId = b.hotelId) as hlogo,(select mngrName from manager 
             where mngrId=b.managerId) as mname,b.branchAdd from branches b where 
             branchId='${branchId}';`

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

module.exports=controllers