let fileData = require('./../../Mock/FilesMockData/file.json')

/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{userObj}] || []
 */
 const get_file_by_fileID = function (fileID) {
    return fileData.filter(file => file.fileID === fileID)
}


/**
 * Get a file by the fileName
 * @param {*} fileName 
 * @returns [{userObj}] || []
 */
 const get_file_by_fileName = function (fileName) {
    return fileData.filter(file => file.fileName === fileName)
}


/**
 * Get a fileType
 * @param {*} fileType 
 * @returns [{userObj}] || []
 */
 const get_fileType = function (fileType) {
    return fileData.filter(file => file.fileType === fileType)
}

exports.set_fileType = function (fileID, newfileType) {
    const currentFile = get_file_by_fileID(fileID);

    if (!currentFile) return 1;

    //fileData = fileData.filter(file => file.fileID !== fileName);

    currentFile.fileType = newfileType;

    fileData.push(currentFile);

    return 0;

}


/**
 * Get a fileShareDate
 * @param {*} fileShareDate 
 * @returns [{userObj}] || []
 */
 const get_fileShareDate = function (fileShareDate) {
    return fileData.filter(file => file.fileShareDate === fileShareDate)
}

/**
 * Get a fileSharedBy
 * @param {*} fileSharedBy 
 * @returns [{userObj}] || []
 */
 const get_fileSharedBy = function (fileSharedBy) {
    return fileData.filter(file => file.fileSharedBy === fileSharedBy)
}

/**
 * Get fileLikedBy
 * @param {*} fileLikedBy 
 * @returns [{userObj}] || []
 */
 const get_fileLikedBy = function (fileLikedBy) {
    return fileData.filter(file => file.fileLikedBy === fileLikedBy)
}

/**
 * Get fileDownloads
 * @param {*} fileDownloads 
 * @returns [{userObj}] || []
 */
 const get_fileDownloads = function (fileDownloads) {
    return fileData.filter(file => file.fileDownloads === fileDownloads)
}


