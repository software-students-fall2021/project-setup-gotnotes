import React, { useReducer, createContext } from "react";
import Reducers from "./reducer";
import {
  SET_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_LAYOUT,
  SET_CURRENT_UNI,
  SET_CURRENT_COURSE,
  SET_COMMENT_COUNT,
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER,
} from "./actions";

const GlobalContext = createContext({});

const GlobalStoreProvider = ({ children }) => {
  const initialState = {
    userToken: null,
    currentUser: false,
    error: false,
    isError: false,
    isLoading: false,
    currentUniName: "",
    currentUniId: null,
    currentCourseName: "",
    currentCourseId: null,
    currentLayout: "list",
    commentCount: 0,
    modalErrorShown: false,
  };

  const [state, dispatch] = useReducer(Reducers, initialState);

  const login_user = (token, user) =>
    dispatch({ type: LOGIN_USER, payload: { token, user } });

  const logout_user = () => dispatch({ type: LOGOUT_USER });

  const set_user = (user) => dispatch({ type: SET_USER, payload: { user } });

  const set_error = (error) =>
    dispatch({
      type: SET_ERROR,
      payload: { error: error, modalErrorShown: true },
    });

  const clear_error = () => dispatch({ type: CLEAR_ERROR });

  const set_current_layout = (currentLayout) =>
    dispatch({ type: SET_CURRENT_LAYOUT, payload: { currentLayout } });

  const set_current_uni = (uniId, uniName) =>
    dispatch({ type: SET_CURRENT_UNI, payload: { uniId, uniName } });

  const set_current_course = (courseId, courseName) =>
    dispatch({ type: SET_CURRENT_COURSE, payload: { courseId, courseName } });

  const set_comment_count = (commentCount) =>
    dispatch({ type: SET_COMMENT_COUNT, payload: { commentCount } });

  return (
    <GlobalContext.Provider
      value={{
        globalState: state,
        set_current_layout,
        set_current_course,
        set_current_uni,
        set_comment_count,
        set_error,
        clear_error,
        login_user,
        logout_user,
        set_user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStoreProvider };
