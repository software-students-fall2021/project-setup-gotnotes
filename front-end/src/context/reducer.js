import { GET_ATTENDEES, SEARCH_ATTENDEES, GET_EVENT_ATTENDEE_MAP, SET_ERROR, CLEAR_ERROR, SET_LOADING } from './actions'

const AttendeeReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_ATTENDEES:
            return {
                ...state,
                attendees: payload
            }
        case SEARCH_ATTENDEES:
            return {
                ...state,
                attendees: payload
            }
        case GET_EVENT_ATTENDEE_MAP:
            return {
                ...state,
                event_attendee_map: payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case SET_ERROR:
            return {
                ...state,
                errors: [...state.errors, payload.message],
                isError: payload.isError
            }
            case CLEAR_ERROR:
                return {
                    ...state,
                    errors: [],
                    isError: payload.isError
                }
        default:
            return state;
    }
}

export default AttendeeReducer