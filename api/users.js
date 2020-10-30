const express = require('express');
const router = express.Router()
//User Model
const User = require('../models/user');

//get all users
router.get('/', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
//create new user
router.post('/', (req, res) => {
    const { username, email } = req.body;
    const newUser = new User({
        name: username, email: email
    })

    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})

module.exports = router 