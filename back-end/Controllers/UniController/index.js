/**
 * var { Uni } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */


const UniService = require("./../../Services/UniService")

// Display list of all unis.
exports.uni_list = function (req, res) {
    res.send(UniService.uniData.map(uni => (
        {
            uniID: uni.uniID,
            uniLogoPath: uni.uniLogoPath,
            uniName: uni.uniName,
            uniStudentCount: uni.uniStudents.length
        }
    )
    )
    )
};

// Display detail page for a specific uni.
exports.uni_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: uni detail: ' + req.params.id);
};


// Handle uni create on POST.
exports.uni_create = function (req, res) {
    const data = req.body;
    const { uniName, uniLogoPath } = data
    
    //an example situation:
    //make a call to service.createuni
    //make a call to service.addCoursesToUni()

    //res.send('NOT IMPLEMENTED: uni create POST');
};

// Display uni delete form on GET.
exports.uni_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: uni delete GET');
};

// Handle uni delete on POST.
exports.uni_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: uni delete POST');
};

// Display uni update form on GET.
exports.uni_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: uni update GET');
};

// Handle uni update on POST.
exports.uni_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: uni update POST');
};