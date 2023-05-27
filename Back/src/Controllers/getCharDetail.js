const axios = require('axios');

const getCharDetail = async(req, res)=>{
    try{
        const {id} = req.params;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data;
            let character = {
                id:data.id,
                status:data.status,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCharDetail,
}