// res.setHeader('Access-Control-Allow-Origin', '*');
const {Router} = require('express');
const {getCharById} = require('../Controllers/getCharById.js');
const {getCharDetail} = require('../Controllers/getCharDetail.js');
const postUser = require('../Controllers/postUser.js');
const login = require('../Controllers/login.js');
const postFav = require('../Controllers/postFav.js');
const deleteFav = require('../Controllers/deleteFav.js');
const router = Router();

router.get('/rickandmorty/character/:id',getCharById);
router.get('/rickandmorty/detail/:id', getCharDetail);
router.get('/logins', login)
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;