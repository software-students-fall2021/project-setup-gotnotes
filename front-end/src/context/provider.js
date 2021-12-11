import React, { useReducer } from 'react'
import GlobalContext from './index';
import Reducers from './reducer';

import { GET_ATTENDEES, SEARCH_ATTENDEES, GET_EVENT_ATTENDEE_MAP, SET_LOADING, SET_ERROR, CLEAR_ERROR } from './actions';

const GlobalStore = props => {

    const initialState = {
        userToken: null,
        currentUser: null,
        currentUniId: null,
        currentCourseId: null,
        error: null,
        isError: false,
        isLoading: false
    }

    const [state, dispatch] = useReducer(Reducers, initialState);

    const get_attendees = () => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch('http://localhost:3000/api/attendees')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: GET_ATTENDEES, payload: data.attendees })
                dispatch({ type: SET_LOADING, payload: false })
                dispatch({ type: CLEAR_ERROR, payload: { isError: false } })
            }
            ).catch(err => {
                dispatch({ type: SET_ERROR, payload: { message: err.message, isError: true } })
            })
    }

    const search_attendees = (params) => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch(`http://localhost:3000/api/search_attendees/${params}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: SEARCH_ATTENDEES, payload: data.attendees })
                dispatch({ type: SET_LOADING, payload: false })
                dispatch({ type: CLEAR_ERROR, payload: { isError: false } })
            }).catch(err => {
                dispatch({ type: SET_ERROR, payload: { message: err.message, isError: true } })
            })
    }

    const get_event_attendee_map = () => {
        dispatch({ type: SET_LOADING, payload: true })
        fetch('http://localhost:3000/api/event_attendee_map')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: GET_EVENT_ATTENDEE_MAP, payload: data.event_attendee_map })
                dispatch({ type: SET_LOADING, payload: false })
                dispatch({ type: CLEAR_ERROR, payload: { isError: false } })
            }).catch(err => {
                dispatch({ type: SET_ERROR, payload: { message: err.message, isError: true } })
            })
    }


    return (
        <>
        { state && (
            <GlobalContext.Provider values={{
                globalState: state,
                get_attendees,
                search_attendees,
                get_event_attendee_map
            }}>
                {props.children}
            </GlobalContext.Provider>
        )}
        </>
    )
}

export default GlobalStore