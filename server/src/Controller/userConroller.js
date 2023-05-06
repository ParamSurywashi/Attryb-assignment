const model = require('../Model/userSchema');
const User = model.User;

exports.addUser = async (req,res)=>{
    const user = new User(req.body);
    user.save();
    res.setHeader('Content-Type','application/json');
    res.send(user);
}

exports.loginUser = async (req,res)=>{
    const user =  await User.findOne({email: req.body.email});

    if(user){
        res.json({"success" : true, "username" : user.username});
        res.end();
    }
}

