import axios from "axios";

export const fetchCourseByUni = async ({ queryKey }) => {
  const [_, uniId] = queryKey;
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
  const [_, courseId] = queryKey;

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
  const [_, fileId] = queryKey;

  const { data } = await axios.get(`http://localhost:4000/files/${fileId}`, {
    crossdomain: true,
  });

  return data;
};

export const fetchCommentsByFileId = async ({ queryKey }) => {
  const [_, fileId] = queryKey;

  const { data } = await axios.get(`http://localhost:4000/comments/${fileId}`, {
    crossdomain: true,
  });

  return data;
};

export const postLikeComment = async (commentId, type, userToken) => {
  const postData = JSON.stringify({
    documentId: commentId,
    type: type,
    likeDislike: "like",
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
