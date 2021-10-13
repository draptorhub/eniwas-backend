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
  
  res.json({data : data});

}

module.exports=controllers