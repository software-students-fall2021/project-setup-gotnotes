let fileData = require('./../../Mock/FilesMockData/file.json')
import { get_user } from ('./../UserService/index.json')

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
