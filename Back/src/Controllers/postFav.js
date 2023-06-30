const {Favorite} = require('../db/DB_connection.js');

const postFav = async(req, res)=>{
    const {name, origin, status, image, species, gender} = req.body;
    try{
        if(name && origin && status && image && species && gender){
            const fav = await Favorite.create({
                name, origin, status, image, species, gender
            })
            User.findAll({
                include: [{ model: Favorite, as: 'favoriteCharacters' }]
              })
                .then(users => {
                  // Obtener los personajes favoritos de todos los usuarios
                  const favoriteCharacters = [];
                  users.forEach(user => {
                    const characters = user.favoriteCharacters.map(character => character.toJSON());
                    favoriteCharacters.push(...characters);
                  });
            
                  // Responder con el arreglo de personajes favoritos
                  return res.json(favoriteCharacters);
                })
        }
        else{
            return res.status(401).json({message: 'Faltan datos'});
        }
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

module.exports = postFav;