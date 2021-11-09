let fileData = require('./../../Mock/FilesMockData/file.json')

/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{userObj}] || []
 */
 exports.get_file_by_fileID = function (fileID) {
    return fileData.filter(file => file.fileID === fileID)
}


/**
 * Get a file by the fileName
 * @param {*} fileName 
 * @returns [{userObj}] || []
 */
 exports.get_file_by_fileName = function (fileName) {
    return fileData.filter(file => file.fileName === fileName)
}


/**
 * Get a fileType
 * @param {*} fileType 
 * @returns [{userObj}] || []
 */
 exports.get_fileType = function (fileType) {
    return fileData.filter(file => file.fileType === fileType)
}

/**
 * Set a new fileType
 * @param {*} fileID, newFileType 
 * @returns [{userObj}] || []
 */
exports.set_fileType = function (fileID, newfileType) {
    const currentFile = get_file_by_fileID(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileType = newfileType;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy like
 * @param {*} fileLikedBy, like 
 * @returns [{userObj}] || []
 */
 exports.set_fileType = function (fileLikedBy, like) {
    const currentFile = get_file_by_fileID(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileLikedBy = like;

    fileData.push(currentFile);

    return 0;
}

/**
 * Set fileLikedBy unlike
 * @param {*} fileLikedBy, unlike 
 * @returns [{userObj}] || []
 */
 exports.set_fileType = function (fileLikedBy, unlike) {
    const currentFile = get_file_by_fileID(fileID)[0];

    if (!currentFile) return 1;

    currentFile.fileLikedBy = unlike;

    fileData.push(currentFile);

    return 0;
}

/**
 * Get a fileShareDate
 * @param {*} fileShareDate 
 * @returns [{userObj}] || []
 */
 exports.get_fileShareDate = function (fileShareDate) {
    return fileData.filter(file => file.fileShareDate === fileShareDate)
}

/**
 * Get a fileSharedBy
 * @param {*} fileSharedBy 
 * @returns [{userObj}] || []
 */
 exports.get_fileSharedBy = function (fileSharedBy) {
    return fileData.filter(file => file.fileSharedBy === fileSharedBy)
}

/**
 * Get fileLikedBy
 * @param {*} fileLikedBy 
 * @returns [{userObj}] || []
 */
 exports.get_fileLikedBy = function (fileLikedBy) {
    return fileData.filter(file => file.fileLikedBy === fileLikedBy)
}

/**
 * Get fileDownloads
 * @param {*} fileDownloads 
 * @returns [{userObj}] || []
 */
 exports.get_fileDownloads = function (fileDownloads) {
    return fileData.filter(file => file.fileDownloads === fileDownloads)
}


