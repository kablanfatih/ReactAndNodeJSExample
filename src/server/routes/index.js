var express = require('express');
var router = express.Router();
const UserModel = require('../db/model/UserModel');


router.post('/register', (req, res) => {
    const {username, password} = req.body;

    const user = new UserModel({
        username,
        password
    });

    const promise = user.save();
    promise.then(data => res.json(data))
        .catch(err => res.json(err));

});

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    UserModel.findOne({
            username
        },
        (err, user) => {
            if (err)
                throw err;

            if (!user) {
                res.json({
                    status: false,
                    message: 'Authentication failed, user not found.'
                });
            } else {
                if (password !== user.password) {
                    res.json({
                        status: false,
                        message: 'Authentication failed, wrong password.'
                    })
                } else {
                    res.json({
                        status: true,
                        username
                    });
                }
            }
        }
    )
});

module.exports = router;