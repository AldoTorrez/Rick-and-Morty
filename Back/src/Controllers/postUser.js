const {User} = require('../db/DB_connection.js');

const postUser = async(req, res)=>{
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
    try{
       if(email && password){
        const us = await User.create({
            email,
            password
           })
           res.json(us);
       }
       else{
        return res.status(400).json({message: 'Faltan datos'});
       }
    }
    catch(error){
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}

module.exports = postUser;