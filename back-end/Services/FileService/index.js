let fileData = require('./../../Mock/FilesMockData/file.json')

/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{userObj}] || []
 */
 const get_file_by_filID = function (fileID) {
    return fileData.filter(user => user.fileID === fileID)
}


/**
 * Get a file by the fileName
 * @param {*} fileName 
 * @returns [{userObj}] || []
 */
 const get_file_by_filID = function (fileID) {
    return fileData.filter(user => user.fileID === fileID)
}
