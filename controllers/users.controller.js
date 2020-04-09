const User = require('../models/users.model');

exports.getAll = (req, res) => {
    User.findAll({raw: true }).then(data=>{
        res.send(data);
    }).catch(err=>console.log(err));
}