// Create web server

// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require models
const Comments = require('../models/comments');

// Create router
const commentRouter = express.Router();

// Use bodyParser
commentRouter.use(bodyParser.json());

// Route for '/'
commentRouter.route('/')
    // GET
    .get((req, res, next) => {
        Comments.find({})
            .populate('author')
            .then((comments) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comments);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    // POST
    .post((req, res, next) => {
        // Check if user is logged in
        if (req.user) {
            // Create new comments document
            Comments.create({
                comment: req.body.comment})
        }
    })