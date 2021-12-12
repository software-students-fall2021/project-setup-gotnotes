import React, { useReducer, createContext } from "react";
import Reducers from "./reducer";
import {
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_LAYOUT,
  SET_CURRENT_UNI,
  SET_CURRENT_COURSE,
  SET_COMMENT_COUNT,
} from "./actions";

const GlobalContext = createContext({});

const GlobalStoreProvider = ({ children }) => {
  const initialState = {
    userToken:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3RVc2VyIiwiaWF0IjoxNjM5MzEwMjM4LCJleHAiOjE2MzkzMTIwMzh9.Adr9bKVUCSqsjUU4LDV4T0HXKCuUaRdU-QqY_Gvy3pk",
    currentUser: false,
    error: false,
    isError: false,
    isLoading: false,
    isAdmin: false,
    currentUniName: "",
    currentUniId: null,
    currentCourseName: "",
    currentCourseId: null,
    currentLayout: "list",
    commentCount: 0,
    modalErrorShown: false,
  };

  const [state, dispatch] = useReducer(Reducers, initialState);
  /*
  const get_attendees = () => {
    dispatch({ type: SET_LOADING, payload: true });
    fetch("http://localhost:3000/api/attendees")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ATTENDEES, payload: data.attendees });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: CLEAR_ERROR, payload: { isError: false } });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: { message: err.message, isError: true },
        });
      });
  };

  const search_attendees = (params) => {
    dispatch({ type: SET_LOADING, payload: true });
    fetch(`http://localhost:3000/api/search_attendees/${params}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SEARCH_ATTENDEES, payload: data.attendees });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: CLEAR_ERROR, payload: { isError: false } });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: { message: err.message, isError: true },
        });
      });
  };

  const get_event_attendee_map = () => {
    dispatch({ type: SET_LOADING, payload: true });
    fetch("http://localhost:3000/api/event_attendee_map")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_EVENT_ATTENDEE_MAP,
          payload: data.event_attendee_map,
        });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: CLEAR_ERROR, payload: { isError: false } });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: { message: err.message, isError: true },
        });
      });
  };
  */

  const set_error = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: { error: error, modalErrorShown: true },
    });
  };
  const clear_error = () => {
    dispatch({ type: CLEAR_ERROR });
    console.log("clear error");
  };
  const set_current_layout = (currentLayout) => {
    dispatch({ type: SET_CURRENT_LAYOUT, payload: { currentLayout } });
  };

  //setCurrentUni, setCurrentUniId, setCurrentCourse, setCurrentCourseId
  const set_current_uni = (uniId, uniName) => {
    dispatch({ type: SET_CURRENT_UNI, payload: { uniId, uniName } });
  };

  const set_current_course = (courseId, courseName) => {
    dispatch({ type: SET_CURRENT_COURSE, payload: { courseId, courseName } });
  };

  const set_comment_count = (commentCount) => {
    dispatch({ type: SET_COMMENT_COUNT, payload: { commentCount } });
  };

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStoreProvider };
