'use strict';

var express       = require('express');
var bodyParser    = require('body-parser');
var app           = express();
var PORT          = 2015;
var fs            = require('fs');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/rows', (req, res) => fs.createReadStream('./rows.json').pipe(res));

app.get('/resource/:name', (req, res) => {
    fs.readdir(`./public/media/${req.params.name}`, (err, data) => {
        res.json(data);
    });
});

app.put('/rows', (req, res) => {
    let updateObject = req.body;
    let curJson = JSON.parse(fs.readFileSync('./rows.json').toString());
    let updatedJson = curJson.map(singleItem => {
        if (singleItem.id === updateObject.id) {
            singleItem[updateObject.propName] = updateObject.propValue;
        }
        return singleItem;
    });
    fs.writeFile('./rows.json', JSON.stringify(updatedJson, null, 4), (err) => {
        if (err) {
          console.log(err);
        }
        res.send(updatedJson);
    });
});

app.post('/rows', (req, res) => {
    let curJson = JSON.parse(fs.readFileSync('./rows.json').toString());
    let updatedJson = curJson.concat([{ id: String(new Date().getTime()), name: '-', sound: '-', image: '-' }]);
    fs.writeFile('./rows.json', JSON.stringify(updatedJson, null, 4), (err) => {
        if (err) {
          console.log(err);
        }
        res.send(updatedJson);
    });
});

app.get('/:name', (req, res, next) => {
    res.redirect('/');
    next();
});

app.listen(PORT);
