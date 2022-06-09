const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
require('dotenv').config();
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

router.get('/wisata',(req, res) => {
    db.any('SELECT * FROM wisata')
    .then(data => {
        res.status(200).json({
            status: 'success',
            message: 'Retrieved all wisata',
            data: data
        });
    });
});

router.get('/detail-wisata', (req, res) => {
    db.any('SELECT * FROM wisata WHERE id = $1', req.params.id)
    .then(data => {
        res.status(200).json({
            status: 'success',
            message: 'Retrieved said wisata from id ' + req.params.id,
            data: data
        });
    });
});

module.exports = router;