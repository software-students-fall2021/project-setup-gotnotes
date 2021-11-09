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
