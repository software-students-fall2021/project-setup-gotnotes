import {
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
  SET_CURRENT_LAYOUT,
  SET_CURRENT_UNI,
  SET_CURRENT_COURSE,
  SET_COMMENT_COUNT,
  
} from "./actions";

const AttendeeReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload.message],
        isError: payload.isError,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errors: [],
        isError: payload.isError,
      };
    case SET_CURRENT_LAYOUT:
      return {
        ...state,
        currentLayout: payload.currentLayout,
      };
    case SET_CURRENT_UNI:
      return {
        ...state,
        currentUniId: payload.uniId,
        currentUniName: payload.uniName,
      };
    case SET_CURRENT_COURSE:
      return {
        ...state,
        currentCourseId: payload.courseId,
        currentCourseName: payload.courseName,
      };
    case SET_COMMENT_COUNT:
      return {
        ...state,
        commentCount: payload.commentCount,
      };
    default:
      return state;
  }
};

export default AttendeeReducer;
