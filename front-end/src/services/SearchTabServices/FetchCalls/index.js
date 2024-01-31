import axios from "axios";

export const refresh = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "/auth/refresh", {
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  if (!data.token) throw new Error(data);

  return data;
};
export const logout = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "/auth/logout", {
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  if (!data.success) throw new Error(data);

  return data;
};

export const fetchUserData = async ({ queryKey }) => {
  const [, userToken] = queryKey;

  const { data } = await axios.get(process.env.BASE_URL + `/account`, {
    crossdomain: true,
    headers: {
      authorization: userToken,
    },
  });

  if (!data._id) throw new Error(data);

  return data;
};

export const postUserUpdates = async ({
  firstName,
  lastName,
  userAvatarUrl,
  userToken,
}) => {
  const postData = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    userAvatarUrl: userAvatarUrl,
  });

  const { data } = await axios.post(
    process.env.BASE_URL + `/account/edit-scalar`,
    postData,
    {
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        authorization: userToken,
      },
    }
  );

  if (!data._id) throw new Error(data.error);

  return data;
};

export const fetchCourseByUni = async ({ queryKey }) => {
  const [, uniId] = queryKey;
  var postData = JSON.stringify({
    uniId: uniId.toString(),
  });

  const { data } = await axios.post(process.env.BASE_URL + `/courses`, postData, {
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
    process.env.BASE_URL + `/courses/${courseId}`,
    {
      crossdomain: true,
    }
  );

  return data;
};

export const fetchUniData = async () => {
  const { data } = await axios.get(process.env.BASE_URL + `/unis`, {
    crossdomain: true,
  });
  return data;
};

export const fetchFileById = async ({ queryKey }) => {
  const [, fileId] = queryKey;

  const { data } = await axios.get(process.env.BASE_URL + `/files/${fileId}`, {
    crossdomain: true,
  });

  return data;
};

export const fetchCommentsByFileId = async ({ queryKey }) => {
  const [, fileId] = queryKey;

  const { data } = await axios.get(process.env.BASE_URL + `/comments/${fileId}`, {
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
    process.env.BASE_URL + `/comments/like-dislike-comment`,
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
    process.env.BASE_URL + `/files/like-dislike-file`,
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

export const uploadFile = async (file, userToken) => {
  const postData = new FormData();
  postData.append("file", file, file.name);

  const { data } = await axios.post(
    process.env.BASE_URL + "/files/upload",
    postData,
    {
      crossdomain: true,
      headers: {
        Authorization: userToken,
      },
    }
  );
  return data;
};
