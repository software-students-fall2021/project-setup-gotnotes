let uniData = require('./../../Mock/UnisMockData/unis.json')

/**
 * Get university by ID
 * @param {*} uniID 
 * @returns [{userObj}] || []
 */
 exports.get_uni_id = function (uniID) {
    return uniData.filter(uni => uni.uniID === uniID)
}

/**
 * Get university by name
 * @param {*} uniName 
 * @returns [{userObj}] || []
 */
 exports.get_uni_name = function (uniName) {
    return uniData.filter(uni => uni.uniName === uniName)
}
