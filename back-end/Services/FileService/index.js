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
 const get_file_by_filName = function (fileName) {
    return fileData.filter(file => file.fileName === fileName)
}

exports.get_user_liked = function (email) {
    const user = get_user(email)[0];
    if (user?.userLiked)
        return user.userLiked
    return null;
}