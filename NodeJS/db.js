const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/crudDB', { useNewUrlParser: true }, (err)=>{
    if(!err){
        console.log('MongoDB connection succeeded');
    }
    else{
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;

/*
const pool = new Pool({
  user: 'edward',
  host: '162.129.225.247',
  database: 'superpacs',
  password: 'heart1',
  port: 5432,
});

pool.query('SELECT NOw()', (err, res) => {
  console.log(err, res)
  pool.end()
});
*/

