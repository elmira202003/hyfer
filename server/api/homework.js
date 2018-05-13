'use strict'
const db = require('../datalayer/homework')
const getConnection = require('./connection').getConnection

function getGroupHomework(req, res) {
    getConnection(req, res)
        .then(con => db.getGroupHomework(con, req.params.groupId))
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
}

function getGroupStudents(req, res) {
    getConnection(req, res)
        .then(con => db.getGroupStudents(con, req.params.groupId))
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
}

function getGroupSubmissions(req, res) {
    getConnection(req, res)
        .then(con => db.getGroupSubmissions(con, req.params.groupId))
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
}

function getGroupReviews(req, res) {
    getConnection(req, res)
        .then(con => db.getGroupReviews(con, req.params.groupId))
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
}

function addHomework(req, res) {
    getConnection(req, res)
        .then(con => db.addHomework(con, req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json(err))
}

function addSubmission(req, res) {
    getConnection(req, res)
        .then(con => db.addSubmission(con, req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json(err))
}

function addReview(req, res) {
    getConnection(req, res)
        .then(con => db.addReview(con, req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json(err))
}

module.exports = {
    getGroupHomework,
    getGroupSubmissions,
    getGroupReviews,
    getGroupStudents,
    addHomework,
    addSubmission,
    addReview
}
