const User = require('./../models/user.model'),
      HTTPStatus  = require('http-status'),
      Boom = require('boom');

exports.findAll = async (req, res, next) =>{
    try{
        const users = await User.find();
        const transformedUsers = users.map(user => user.transform());
        let data = {"users" : transformedUsers}
        res.json(data);
    }catch(err) {
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next, data) =>{
    console.log(data[7], data[8], data[9], data[10], data[11])
    try{
        const user = new User({
            "firstname" : data[0],
            "lastname" :  data[1],
            "sexe" : data[2],
            "password" : data[3],
            "age" : data[4],
            "email": data[5],
            "phone" : data[6],
            "address" : {
                "street" : data[7],
                "number" : data[8],
                "zip" : data[9],
                "city" : data[10],
                "country" : data[11],
            },
            "idRole": data[12], 
            "onModel": data[13]
        });
        await user.save();
        // res.status(HTTPStatus.CREATED);
        // res.json(savedUser.transform());
    }catch(err){
        console.log(err);
        next(User.checkDuplicateEmail(err));
    }
};