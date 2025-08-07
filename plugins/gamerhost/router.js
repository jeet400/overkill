const express = require('express');
const router = express.Router();
const { db } = require('../../handlers/db'); // Adjust path if needed

// Add the following to your manifest.json file to define the instance sidebar:
// "instancesidebar": {
//     "GamerHost": {
//         "url": "/instance/%gamerhostid%/gamerhost",
//         "icon": "fa-solid fa-server"
//     }
// }

router.get('/instance/:gamerhostid/gamerhost', (req, res) => {
    const { gamerhostid } = req.params;

    res.render('index', {
        user: req.user,
        req,
        gamerhostid, // optional: pass to view if needed
    });
});

module.exports = router;
