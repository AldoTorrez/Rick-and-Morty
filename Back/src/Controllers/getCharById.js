const axios = require('axios');

const getCharById = async(req, res)=>{
    try{
        const {id} = req.params;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data;
            let character = {
                id:data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCharById,
}