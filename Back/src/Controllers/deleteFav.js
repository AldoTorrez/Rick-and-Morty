const {Favorite} = require('../db/DB_connection.js');

const deleteFav = async(req, res)=>{
    const {id} = req.params;
    try{
        Favorite.destroy({
            where:{id: id}
        })
        return res.json({message: 'el personaje se elimino correctamente'});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

module.exports = deleteFav;