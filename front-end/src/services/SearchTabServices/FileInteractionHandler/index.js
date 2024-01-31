export const likeDislikeFile = (currentUserID, fileID, likeStatus) => {
  let returnData = null;
  const reqOptions = {
    method: "POST",
    headers: { "Content-Type": "application.json" },
    body: JSON.stringify({
      userID: currentUserID,
      fileID: fileID,
      likeStatus: likeStatus,
    }),
  };
  fetch(process.env.BASE_URL + "/unis/:uni/:course", reqOptions)
    .then((res) => res.json())
    .then((data) => (returnData = data));

  return returnData;
};
