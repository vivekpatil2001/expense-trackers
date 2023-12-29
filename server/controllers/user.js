import User from "../models/User.js"

const addUser = async (req, res) => {

    const { name, email, password, mobile, address, gender } = req.body;

    try {
        const user = new User({
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            address: address,
            gender: gender

        });

        const saveduser = await user.save();

        res.json({
            success: true,
            data: saveduser,
            message: 'user saved succesfully'
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}

const getUser = async (req, res) => {
 
    try{
        const users = await User.find()

        res.json({
            success: true,
            data: users,
            message: 'succesfully fetch all users'
        })
    }catch(err){
        return res.json({
            success:false,
            message:err.message
        })
    }
}

const loginUser =   async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email, password }).select('email name mobile');

    if (user == null) {
        return res.json({
            success: false,
            message: 'login failed plz sign up '
        });
    }
    try {
        res.json({
            success: true,
            data: user,
            message: 'succesfully login user'
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }

} 


export { addUser, getUser, loginUser }