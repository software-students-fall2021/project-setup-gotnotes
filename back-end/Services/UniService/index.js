const uniData = require('./../../Mock/UnisMockData/unis.json')
exports.uniData = uniData

// Comment By Kaan Karakas

//not addind addUni by university name or any specific key. If a university is added it should have
//everything containing uniID, uniName, uniLogoPath but it doesnt need uniStudent[] and UniCourses[]
// as there might not be any student registered. 

//TODO we should have a mongoose instance here for all the 
//post requests that are going to be processed by the srevices

/**
 * Get uni by uniID
 * @param {uniID} uniID
 * @returns [{uniObh}] || []
 */
exports.get_uni = function (uniID) {
  
  return uniData.filter(uni => uni.uniID == uniID);
}
/**
 * Adds a new uni to the database 
 * @param {*} uniID is the primary key
 * @param {*} uniName is the name of the university 
 * @param {*} uniLogPath is the path to the logo of the uni
 * @returns 0 if success, 1 of no such user
 */
exports.set_uni = function (uniID, uniName, uniLogoPath) {
  //its not gone be like this when

  var jsonFile = uniData;
  var obj = JSON.parse(JSON.stringify(jsonFile));
  let newUni = {
    "uniID": uniID,
    "uniName": uniName,
    "uniLogoPath": uniLogoPath,
    "uniStudents": null,
    "uniCourses": null,
  };

  obj.push(newUni);
  jsonStr = JSON.stringify(obj);
  return 1;


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

/**
 * Get uni by its university name
 * @param {uniID} uniID 
 * @returns [{uniObj}] || []
 */
exports.get_uni_uniName = function (uniID) {
  const uni = get_uni(uniID);
  if (uni?.uniName) {
    return uni.uniName;
  }
  return null;
}

/**
 * add new student to the uni list
 * @param {*} uniID
 * @param {*} studenID
 * @returns 1 if succesfule addition 0 doesnt happen
 */
exports.add_course_student = function (uniID, userID) {
  const uni = get_course_id(uniID)[0];

  if (!uni) return 0;

  uniData = uniData.filter(uni => uni.uniID !== uniID);

  const addStudent = { userID: userID }

  uni[0].uniStudents.push(addStudent);

  uniData.push(uni);

  return 1;

}