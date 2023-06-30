const app = require('./app.js');
const {conn} = require('./db/DB_connection.js');

    conn.sync({force: true});
    app.listen(3001, ()=>{console.log('back-end listening on port: 3001')});