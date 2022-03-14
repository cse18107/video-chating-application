const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postRegister = async(req,res,next)=>{
    try{
        const { username, mail, password} = req.body;
        console.log(req);
        
        // check if user exists
        const userExists = await User.exists({mail:mail.toLowerCase()});

        if(userExists){
            return res.status(409).json({
                message:"user with email id is already exist"
            });
        }

        //encrypt password
        const encryptPassword = await bcrypt.hash(password,10);

        // create user document and save in database
        const user = await User.create({
            username,
            mail:mail.toLowerCase(),
            password:encryptPassword
        });

        // create JWT token
        const token = jwt.sign(
            {
                userId:user._id,
                mail:mail,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        );

        res.status(200).json({
            message: "success",
            userDetails: {
              mail: user.mail,
              token: token,
              username: user.username,
            },
          });

    }catch(error){
        return res.status(500).json({
            message:`${error}`
        })
    }
};

module.exports = postRegister;