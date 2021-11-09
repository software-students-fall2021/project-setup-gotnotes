let uniData = require('./../../Mock/UsersMockData/unis.json')

/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
 exports.get_user = function (uniID) {
    return uniData.filter(uni => uni.uniID === uniID)
}