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
 * @param {*} fileID, file id
 * * @param {*} newFileSharedBy, a user obj 
 * @returns boolean, 0 if success, 1 if no such file
 */
exports.set_fileSharedBy = function (fileID, newFileSharedById) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileSharedBy = [{ userID: newFileSharedById }];

    fileData.push(currentFile);

    return 0;
}

/**
 * Get file downloads
 * @param {*} fileID 
 * @returns number || -1
 */
exports.get_fileDownloads = function (fileID) {
    const file = get_file(fileID)[0]
    if (!file)
        return -1
    return file.fileDownloads
}

/**
 * Increase file download counter by one
 * @param {*} fileID 
 * @returns boolean, 0 if success, 1 if no such file
 */
exports.set_fileDownloads_increase = function (fileID) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileShareDate = currentFile.fileShareDate + 1;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy like
 * @param {*} fileLikedBy, like 
 * @returns [{fileObj}] || []
 */
exports.set_fileLikedBy_like = function (fileID, likedById) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileLikedBy.push({ userId: likedById });

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy unlike
 * @param {*} fileLikedBy, unlike 
 * @returns [{fileObj}] || []
 */
exports.set_fileLikedBy_unlike = function (fileID, unlikedById) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    const newLikedBy = currentFile.fileLikedBy.filter(user => user.userId !== unlikedById);

    currentFile.fileLikedBy = newLikedBy;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy like
 * @param {*} fileDislikedBy, like 
 * @returns [{fileObj}] || []
 */
exports.set_fileLikedBy_dislike = function (fileID, dislikedById) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileDislikedBy.push({ userId: dislikedById });

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy unlike
 * @param {*} fileDislikedBy, unlike 
 * @returns [{fileObj}] || []
 */
exports.set_fileLikedBy_undislike = function (fileID, undislikedById) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    const newDislikedBy = currentFile.fileDislikedBy.filter(user => user.userId !== undislikedById);

    currentFile.fileDislikedBy = newDislikedBy;

    fileData.push(currentFile);

    return 0;
}



/**
 * Set fileAddComments
 * @param {*} commentId
 * @returns [{fileObj}] || []
 */
exports.set_fileComments_add = function (fileID, commentId) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileComments.push({commentId: commentId});

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileRemoveComments
 * @param {*} fileComments
 * @returns [{fileObj}] || []
 */
exports.set_fileComments_remove = function (fileID, commentId) {
    const currentFile = get_file(fileID)[0];

    if (!currentFile) return 1;

    const newComments = currentFile.fileComments.filter(comment => comment.commentId !== commentId)
    currentFile.fileComments = newComments;

    fileData.push(currentFile);

    return 0;
}


