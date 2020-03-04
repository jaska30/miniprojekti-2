const Pool = require('pg').Pool;
require('dotenv').config();


const conopts = {
    user: 'postgres',
    password: 'Oregano666',
    host: 'localhost',
    database: 'miniprojekti'
}

const pool = new Pool(conopts);


const getPics = (cb) => {
    pool.query('SELECT * from images', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}


const postResults = (uusiTulos, cb) => {
    const { username, score } = uusiTulos;
    pool.query('INSERT INTO results (username, score) VALUES ($1, $2)', [username, score], (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rowCount);
    })
}

const getResults = (cb) => {
    pool.query('SELECT * from results', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}


module.exports = {getPics, getResults, postResults};