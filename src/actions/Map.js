import rp from 'request-promise'

export function getMarkers() {
    return (dispatch) => {
        dispatch({
            type: 'GET_MARKERS_REQUEST'

        })

        rp('//192.168.0.213:8080').then((response) => {
            dispatch({
                type: 'GET_MARKERS_SUCCESS',
                payload: [JSON.parse(response).points],
                fetching: true

            })

        }).catch(() => {}
            dispatch({
                type: 'GET_MARKERS_FAILED',
                fetching: false

            }))
    }
