const {User} = require('../db/DB_connection.js');

const login = async(req, res)=>{
    const {email, password} = req.query;
    console.log(email, password);
    try{
        if(email && password){
            User.findOne({where:{email: email}})
            .then((user)=>{
                if(!user){
                    res.status(404).json({message: 'Usuario no encontrado'})
                }
                if(user.password !== password){
                    res.status(403).json({message: 'Contraseña incorrecta'});
                }
                res.json({access: true});
            })
        }
        else{
         return res.status(500).json({message: error.message});
        }
     }
     catch(error){
         return res.status(500).json({ message: 'Error en el servidor' });
     }
}

module.exports = login;