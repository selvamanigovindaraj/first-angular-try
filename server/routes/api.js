const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');

const url='mongodb://localhost:27017/mean1';
// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.post('/new', (req, res) => {
    var item = {
        name: req.body.name,
        password: req.body.password,
      };
      connection((db)=>{
        db.collection('users').insertOne(item).then((users)=>{
            response.data=users;
            res.json(response);
        })
        .catch((err)=>{
            sendError(err,res)
        })
    
    //   MongoClient.connect(url, function(err, db) {
    //     assert.equal(null, err);
    //     db.collection('users').insertOne(item, function(err, result) {
    //       assert.equal(response, err);
    //       console.log('Item inserted');
    //       db.close();
    //     });
    //   });
    
    
    });
});

module.exports = router;