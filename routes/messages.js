var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

// GET /messages/:id
router.get('/:id', function (req, res, next) {
    // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
    var messageId = req.params.id;
    Models.Message.findOne({
        where: {id: messageId},
        include: {
            model: Models.Reply,
            include: {
                model: Models.User
            }
        }})
            .then(function (topic) {
                console.log(topic);
                res.json(topic);
            });
});

// POST /messages/:id/reply
router.post('/:id/reply', authentication, function (req, res, next) {
    // Lisää tällä id:llä varustettuun viestiin...
    var messageId = req.params.id;
    // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var replyToAdd = req.body;

    replyToAdd.MessageId = messageId;
    replyToAdd.UserId = req.session.userId;
    // Palauta vastauksena lisätty vastaus
    Models.Reply.create(replyToAdd).then(function (newMsg) {
        console.log(newMsg.name + ' on lisätty tietokantaan onnistuneesti!');
        res.json(newMsg);
    });
});

module.exports = router;
