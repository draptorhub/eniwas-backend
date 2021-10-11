const controllers={}

const sequelize=require('../models/database')
var table = sequelize.import('../models/owner')
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

module.exports=controllers