let requestPromise = require('request-promise')
    // import requestPromise from 'request-promise'
export function getPoints() {
    return (dispatch) => {
        dispatch({
            type: 'GET_POINTS_REQUEST'
        })
        requestPromise('http://192.168.0.15:8080').then((response) => dispatch({
            type: 'GET_POINTS_SUCCESS',
            payload: JSON.parse(response).points.filter(function(point){
                    return (point.marker.length > 0 &&  +new Date(point.date * 1000 +  3 * 3600 * 1000) > +new Date())
                })
 
    }))
}}
