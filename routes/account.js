let express = require('express');
let router = express.Router();
let path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
    let page = path.resolve('public/account-page.html');
    res.sendFile(page);
});

module.exports = router;
