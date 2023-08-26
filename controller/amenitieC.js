const Amenitie = require("../model/Amenitie");

const createAmenitie = async(req,res) =>{
    const {name, price} = req.body;
    const nameFormat = name.toUpperCase()
    const amenitie = new Amenitie({name: nameFormat, price});

    try {

        await amenitie.save();
        res.json({
            amenitie
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mssg: "something is wrong",
        });
    } 
}

module.exports={
    createAmenitie
}