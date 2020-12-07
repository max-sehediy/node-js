const { request, json } = require('express');
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path')


/* GET goals page. */
router.get('/', function (req, res, next) {
    // console.log(fs.readdirSync('./public/photos.json'));
    let content = String(fs.readFileSync('./public/photos.json'))
    let data = JSON.parse(content)
    res.render('cinemas', {
        title: 'Cinemas',
        target: 'Some ',
        arr: data
    });
});
router.get('/:id', function (req, res, next) {
    let id = (req.params.id)
    let idNumber = id.slice(1)
    let content = String(fs.readFileSync('./public/photos.json'))
    let photosId = JSON.parse(content)
    res.render('cinema', {
        title: 'Cinema',
        arr: photosId[idNumber - 1]
    });
})
router.get('/movies', function (req, res, next) {
});

module.exports = router;
