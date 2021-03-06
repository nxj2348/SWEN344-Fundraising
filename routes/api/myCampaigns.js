let express = require('express');
let router = express.Router();
let sqlite = require('sqlite3');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    let userId = req.query.userId;
    if (userId !== null) {
        let db = new sqlite.Database(path.resolve('database/fundraising.db'), sqlite.OPEN_READWRITE);
        db.all("SELECT * FROM campaign WHERE ownerId = ?", userId, function (err, rows) {
            if (err) {
                console.error(err);
            }
            res.json(rows);
        });
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;