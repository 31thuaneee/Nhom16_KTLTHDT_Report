const Interface = require("../models/interfaceModel");
let model = new Interface();

exports.getAll = function(req, res) {
    model.getAll(function (status, data, message, error) {
        res.send({
            status: status,
            data: data,
            message: message,
            error: error
        })
    }).then(value => {
        console.log(value);
    });
};

exports.search = function(req, res) {
    model.search(req.params.info, function (status, data, message, error) {
        res.send({
            status: status,
            data: data,
            message: message,
            error: error
        })
    }).then(value => {
        console.log(value);
    });
};


