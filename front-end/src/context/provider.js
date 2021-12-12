import React, { useReducer, createContext } from "react";
import Reducers from "./reducer";
import {
  GET_ATTENDEES,
  SEARCH_ATTENDEES,
  GET_EVENT_ATTENDEE_MAP,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_LAYOUT
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
    currentUni: "",
    currentCourse: "",
  };

  const [state, dispatch] = useReducer(Reducers, initialState);

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

  const set_current_layout = (layout) => {
    dispatch({type: SET_CURRENT_LAYOUT, payload: {currentLayout: layout}})
  }

  return (
    <GlobalContext.Provider
      value={{
        globalState: state,
        get_attendees,
        search_attendees,
        get_event_attendee_map,
        set_current_layout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStoreProvider };
