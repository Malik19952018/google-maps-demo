var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/getMarkers', function (req, res, next) {
    const newMarkersList = [{
        id: 1,
        position: {
            lat: 43.844148,
            lng: 18.353853
        },
        infoWindowContent: "Prvi marker"
    },
        {
            id: 2,
            position: {
                lat: 43.843596,
                lng: 18.354736
            },
            infoWindowContent: "Drugi marker"
        },
        {
            id: 3,
            position: {
                lat: 43.843343,
                lng: 18.354972
            },
            infoWindowContent: "Treci marker"
        }];
    res.send(newMarkersList);
});

module.exports = router;
