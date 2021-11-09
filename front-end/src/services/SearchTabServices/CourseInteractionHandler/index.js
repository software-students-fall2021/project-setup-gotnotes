//const axios = require("axios") // middleware for making requests to APIs

export const subscribeToCourse = (currentUserID, courseID) => {
  let returnData = null;
  const reqOptions = {
    method: "POST",
    headers: { "Content-Type": "application.json" },
    body: JSON.stringify({ userID: currentUserID, courseID: courseID }),
  };
  fetch("http://localhost:4000/unis/:uni", reqOptions)
    .then((res) => res.json())
    .then((data) => (returnData = data));

  return returnData;
};

/*
// proxy requests to/from an API
app.get("/proxy-example", (req, res, next) => {
  // use axios to make a request to an API for animal data
  axios
    .get("https://my.api.mockaroo.com/animals.json?key=d9ddfc40&num=10")
    .then(apiResponse => res.json(apiResponse.data)) // pass data along directly to client
    .catch(err => next(err)) // pass any errors to express
})*/
