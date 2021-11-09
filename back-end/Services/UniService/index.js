let uniData = require('./../../Mock/UnisMockData/unis.json')
<<<<<<< HEAD

// Comment By Kaan Karakas

//not addind addUni by university name or any specific key. If a university is added it should have
//everything containing uniID, uniName, uniLogoPath but it doesnt need uniStudent[] and UniCourses[]
// as there might not be any student registered. 


/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
 exports.get_uni = function (uniID) {
    return uniData.filter(uni => uni.uniID === uniID);
}
/**
 * Sets a new pass hash for the user with given email
 * @param {*} email the email of the user, praimry key
 * @param {*} newPassHash the new pass hash to be inserted
 * @returns 0 if success, 1 of no such user
 */
 exports.set_uni = function (uniID, uniName, uniLogoPath) {
     //its not gone be like this when

     var jsonFile= uniData;
     var obj= JSON.parse(JSON.stringify(jsonFile));
     let newUni = {
        "uniID": uniID,
        "uniName": uniName,
        "uniLogoPath": uniLogoPath,
        "uniStudents": null,
        "uniCourses": null,
      };

      obj.push(newUni);
      jsonStr= JSON.stringify(obj);


     /*
    const fs = require("fs");
    var data = fs.readFileSync('./../../Mock/UnisMockData/unis.json');
    var myObject = JSON.parse(data);
       let newUni = {
        "uniID": uniID,
        "uniName": uniName,
        "uniLogoPath": uniLogoPath,
        "uniStudents": null,
        "uniCourses": null,
      };
 

    myObject.push(newUni);

    var newData2 = JSON.stringify(myObject);
    fs.writeFile("data2.json", newData2, (err) => {
      // Error checking
      if (err) throw err;
      console.log("New data added");
    });
    return "dawda";
*/
}
=======
>>>>>>> 5371164c2ea421db08593ab4161ba0ab04a4b5ae

/**
 * Get university by ID
 * @param {*} uniID 
 * @returns [{userObj}] || []
 */
<<<<<<< HEAD
 exports.get_uni_uniName = function (uniID) {
     const uni= get_uni(uniID);
     if(uni?.uniName){
         return uni.uniName;
     }
     return null;
}



console.log(this.set_uni(101,"KarakasUni", "wadwda"));
=======
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
>>>>>>> 5371164c2ea421db08593ab4161ba0ab04a4b5ae
