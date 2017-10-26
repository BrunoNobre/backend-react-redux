const express = require('express');

module.exports = function(server) {

    // API Routes
    const router = express.Router();
    server.use('/ping', function(req, res, next) {
        res.json('rodando!');
        next();
    });

    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}