import React, { useReducer, createContext } from "react";
import Reducers from "./reducer";
import {
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_LAYOUT,
  SET_CURRENT_UNI,
  SET_CURRENT_COURSE
} from "./actions";

const GlobalContext = createContext({});

const GlobalStoreProvider = ({ children }) => {
  const initialState = {
    userToken: null,
    currentUser: null,
    currentUniId: null,
    currentCourseId: null,
    error: null,
    isError: false,
    isLoading: false,
    isAdmin: true,
    currentUniName: "",
    currentUniId: null,
    currentCourseName: "",
    currentCourseId: null,
    currentLayout: "list",
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

  return (
    <GlobalContext.Provider
      value={{
        globalState: state,
        set_current_layout,
        set_current_course,
        set_current_uni
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStoreProvider };
