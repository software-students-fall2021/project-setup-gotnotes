let fileData = require('./../../Mock/FilesMockData/file.json')

/*
{
    "fileID":1,
    "fileName":"VestibulumSedMagna.ppt",
    "fileType":"application/powerpoint",
    "fileShareDate":"1/31/2021",
    "fileSharedBy":[
        {
            "userID":75
        }
    ],
    "fileDownloads":46,
    "fileLikedBy":[
        {"userId":24},{"userId":86},{"userId":82},
        {"userId":12},{"userId":14},{"userId":34},
        {"userId":89},{"userId":23},{"userId":40},
        {"userId":60},{"userId":70},{"userId":89},
        {"userId":91},{"userId":42},{"userId":38},
        {"userId":78}
    ],
    "fileDislikedBy":[
        {"userId":78}
    ],
    "fileComments":[
        {"commentId":29},{"commentId":14},{"commentId":50},
        {"commentId":19},{"commentId":72},{"commentId":78},
        {"commentId":33},{"commentId":37},{"commentId":29},
        {"commentId":19}
    ]
}
 */
/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{fileObj}] || []
 */
 exports.get_file = function (fileID) {
    return fileData.filter(file => file.fileID === fileID)
}

/**
 * Set fileName
 * @param {*} fileID
 * @param {*} newFileName
 * @returns boolean, 0 if success, 1 if no such file
 */
 exports.set_fileName = function (fileID, newFileName) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileName = newFileName;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set a new fileType
 * @param {*} fileID
 * * @param {*} newFileType 
 * @returns boolean, 0 if success, 1 if no such file
 */
exports.set_fileType = function (fileID, newFileType) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileType = newFileType;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set a new fileType
 * @param {*} fileID
 * * @param {*} newFileShareDate 
 * @returns boolean, 0 if success, 1 if no such file
 */
 exports.set_fileShareDate = function (fileID, newFileShareDate) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileShareDate = newFileShareDate;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set a new fileType
 * @param {*} fileID
 * * @param {*} newFileSharedBy 
 * @returns boolean, 0 if success, 1 if no such file
 */
 exports.set_fileSharedBy = function (fileID, newFileSharedBy) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileSharedBy = newFileSharedBy;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy like
 * @param {*} fileLikedBy, like 
 * @returns [{fileObj}] || []
 */
 exports.set_fileLikedBy_like = function (fileLikedBy, like) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileLikedBy = like;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy unlike
 * @param {*} fileLikedBy, unlike 
 * @returns [{fileObj}] || []
 */
 exports.set_fileLikedBy_unlike = function (fileLikedBy, unlike) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileLikedBy = unlike;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy unlike
 * @param {*} fileDislikedBy, dislike 
 * @returns [{fileObj}] || []
 */
 exports.set_fileDislikedBy_dislike = function (fileDislikedBy, dislike) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileDislikedBy = dislike;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy undislike
 * @param {*} fileDislikedBy, undislike 
 * @returns [{fileObj}] || []
 */
 exports.set_fileDislikedBy_undislike = function (fileDislikedBy, undislike) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileDislikedBy = undislike;

    fileData.push(currentFile);

    return 0;
}

/**
 * Get a fileShareDate
 * @param {*} fileShareDate 
 * @returns [{fileObj}] || []
 */
 exports.get_fileShareDate = function (fileShareDate) {
    return fileData.filter(file => file.fileShareDate === fileShareDate)
}


/**
 * Get a fileSharedBy
 * @param {*} fileSharedBy 
 * @returns [{fileObj}] || []
 */
 exports.get_fileSharedBy = function (fileSharedBy) {
    return fileData.filter(file => file.fileSharedBy === fileSharedBy)
}

/**
 * Get fileLikedBy
 * @param {*} fileLikedBy 
 * @returns [{fileObj}] || []
 */
 exports.get_fileLikedBy = function (fileLikedBy) {
    return fileData.filter(file => file.fileLikedBy === fileLikedBy)
}

/**
 * Get fileDownloads
 * @param {*} fileDownloads 
 * @returns [{fileObj}] || []
 */
 exports.get_fileDownloads = function (fileDownloads) {
    return fileData.filter(file => file.fileDownloads === fileDownloads)
}

/**
 * Get fileComments
 * @param {*} fileComments 
 * @returns [{fileObj}] || []
 */
 exports.get_fileComments = function (fileComments) {
    return fileData.filter(file => file.fileComments === fileComments)
}

/**
 * Set fileAddComments
 * @param {*} fileComments
 * @returns [{fileObj}] || []
 */
 exports.set_fileAddComments = function (fileComments, commentToAdd) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileComments = commentToAdd;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileRemoveComments
 * @param {*} fileComments
 * @returns [{fileObj}] || []
 */
 exports.set_fileRemoveComments = function (fileComments, commentToRemove) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile[0].fileComments = currentFile[0].
    userLiked.
    filter(comment =>
        comment.fileComments !== commentToRemove
    )

    fileData.push(currentFile);

    return 0;
}


