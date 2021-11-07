/**
 * var { File } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

// Display list of all files.
exports.file_list = function (req, res) {
    res.send('NOT IMPLEMENTED: file list');
};

// Display detail page for a specific file.
exports.file_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: file detail: ' + req.params.id);
};

// Display file create form on GET.
exports.file_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: file create GET');
};

// Handle file create on POST.
exports.file_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: file create POST');
};

// Display file delete form on GET.
exports.file_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: file delete GET');
};

// Handle file delete on POST.
exports.file_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: file delete POST');
};

// Display file update form on GET.
exports.file_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: file update GET');
};

// Handle file update on POST.
exports.file_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: file update POST');
};