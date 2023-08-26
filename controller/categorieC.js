const Categorie = require("../model/Categorie");

const createCategorie = async(req,res) =>{
    const {name} = req.body;
    const nameFormat = name.toUpperCase();
    const categorie = new Categorie({name: nameFormat});

    try {

        await categorie.save();
        res.json({
            categorie
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mssg: "something is wrong",
        });
    } 
}

module.exports={
    createCategorie
}