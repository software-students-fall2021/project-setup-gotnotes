import axios from "axios";

export const fetchUserData = async ({ queryKey }) => {
  const [, userToken] = queryKey;

  const { data } = await axios.get(`http://localhost:4000/account`, {
    crossdomain: true,
    headers: {
      authorization: userToken,
    },
  });

  if (!data._id) throw new Error(data);

  return data;
};

export const postUserUpdates = async (firstName, lastName, userAvatarUrl) => {
  
  return null
}

export const fetchCourseByUni = async ({ queryKey }) => {
  const [, uniId] = queryKey;
  var postData = JSON.stringify({
    uniId: uniId.toString(),
  });

  const { data } = await axios.post(`http://localhost:4000/courses`, postData, {
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const fetchSingleCourse = async ({ queryKey }) => {
  const [, courseId] = queryKey;

  const { data } = await axios.get(
    `http://localhost:4000/courses/${courseId}`,
    {
      crossdomain: true,
    }
  );

  return data;
};

export const fetchUniData = async () => {
  const { data } = await axios.get(`http://localhost:4000/unis`, {
    crossdomain: true,
  });
  return data;
};

export const fetchFileById = async ({ queryKey }) => {
  const [, fileId] = queryKey;

  const { data } = await axios.get(`http://localhost:4000/files/${fileId}`, {
    crossdomain: true,
  });

  return data;
};

export const fetchCommentsByFileId = async ({ queryKey }) => {
  const [, fileId] = queryKey;

  const { data } = await axios.get(`http://localhost:4000/comments/${fileId}`, {
    crossdomain: true,
  });

  return data;
};

export const postLikeDislikeComment = async (
  commentId,
  type,
  likeDislike,
  userToken
) => {
  const postData = JSON.stringify({
    documentId: commentId,
    type: type,
    likeDislike: likeDislike,
  });

  console.log("postData: ", postData);

  const { data } = await axios.post(
    `http://localhost:4000/comments/like-dislike-comment`,
    postData,
    {
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    }
  );
  console.log("like data: ", data);
  return data;
};

export const postLikeDislikeFile = async (
  fileId,
  likeDislike,
  type,
  userToken
) => {
  const postData = JSON.stringify({
    documentId: fileId,
    type: type,
    likeDislike: likeDislike,
  });

  const { data } = await axios.post(
    `http://localhost:4000/files/like-dislike-file`,
    postData,
    {
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    }
  );

  return data;
};
