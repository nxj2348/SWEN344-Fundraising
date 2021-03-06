let express = require('express');
let router = express.Router();
const sqlite = require('sqlite3');
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
    const userId = req.query.userId;
    if (userId) {
        const db = new sqlite.Database(path.resolve('database/fundraising.db'), sqlite.OPEN_READWRITE);
        db.all("SELECT cp.title, cc.contribution FROM campaign_contributor cc " +
            "INNER JOIN campaign cp ON cc.campaignId = cp.campaignId " +
            "WHERE cc.userId = ?",
            userId,
            function(err, rows) {
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