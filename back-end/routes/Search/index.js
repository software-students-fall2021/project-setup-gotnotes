const express = require('express');
const router = express.Router({mergeParams: true});

var unisRouter = require('./Unis');
var coursesRouter = require('./Courses');
var filesRouter = require('./Files');
var fileRouter = require('./File');


router.use('/unis', unisRouter);
router.use('/unis/:uni', coursesRouter);
router.use('/unis/:uni/:course', filesRouter);
router.use('/unis/:uni/:course/:file', fileRouter);

module.exports = router;