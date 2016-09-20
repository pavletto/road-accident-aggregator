import requestPromise from 'request-promise'
export function getPoints() {

    return (dispatch) => {
        dispatch({
            type: 'GET_MARKERS_REQUEST'

        })
        requestPromise('http://pvlt.test.com:8080').then((response) => {
           return dispatch({
                type: 'GET_MARKERS_SUCCESS',
                payload: JSON.parse(response).points
            })
        }).catch(() => {
            dispatch({
                type: 'GET_MARKERS_FAILED',
                fetching: false
            })

        })
    }
}
