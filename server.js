const express = require("express");
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
var pool;
pool = new Pool({
    connectionString: process.env.DATABASE_URL,
     ssl: {
        rejectUnauthorized: false
    }
})

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.listen(PORT, () => {
    console.log("running");
})

app.get('/getdata', (req, res) => {
    var getUserQuery = 'SELECT * FROM users';
    pool.query(getUserQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'rows': result.rows };
        res.json({ results });
    })
})

app.get('/getcurrentuser', (req, res) => {
    var getUserQuery = 'SELECT * FROM current';
    pool.query(getUserQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'rows': result.rows };
        res.json({ results });
    })
})

app.post('/update', (req, res) => {
    var getUserQuery = req.body.code;
    console.log(getUserQuery);
    pool.query(getUserQuery, (error, result) => {
        if (error)
            res.end(error);
        res.sendStatus(200);
    })
})

