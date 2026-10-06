import express from "express";
import pg from 'pg'
const app = express()
const port = 3000
const { pool } = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Cnr210507',
    port: 5432,
})

app.get('/', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('SELECT * FROM biodata',)
        .then((testData) => {
            console.log(testData);
            res.send(testData.rows)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('internal server error');
        })
})