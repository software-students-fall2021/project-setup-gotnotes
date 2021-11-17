/**
 * var { Files } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

 const CourseService = require("./../../Services/CourseService")

// Display list of all filess.
exports.files_list = function (req, res) {
    
    res.send(CourseService.get_course(req.params.course))
};

// Display detail page for a specific files.
exports.files_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: files detail: ' + req.params.id);
};

// Display files create form on GET.
exports.files_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: files create GET');
};

// Handle files create on POST.
exports.files_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: files create POST');
};

// Display files delete form on GET.
exports.files_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: files delete GET');
};

// Handle files delete on POST.
exports.files_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: files delete POST');
};

// Display files update form on GET.
exports.files_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: files update GET');
};

// Handle files update on POST.
exports.files_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: files update POST');
};