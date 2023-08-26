const Hotel = require("../model/Hotel");

const createHotel = async (req,res) =>{
    const {name, email, phone} = req.body;
    const nameFormat = name.toUpperCase();
    const hotel = new Hotel({name: nameFormat, email, phone});

    try {

        await hotel.save();
        res.json({
            hotel
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mssg: "something is wrong",
        });
    } 
}
module.exports={
    createHotel
}