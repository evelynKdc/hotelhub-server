const User = require("../model/User");

const userPut = async (req,res)=>{
    const {id} = req.params;
    const {password, __v, estatus, createdAt, ...rest} = req.body;

    try {
        
        const user = await User.findByIdAndUpdate(id, rest, {new: true})
        res.json({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({mssg:"internal Error"})
    }
}

const userDelete = async(req,res)=>{
    const {id} = req.params;
    try {
        
        const user = await User.findByIdAndUpdate(id, {estatus: false}, {new: true})
        res.json({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({mssg:"internal Error"})
    }
}


module.exports = {
    userPut,
    userDelete
}