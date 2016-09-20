const initialState = {
    points: [],
    fetching: false

}

export default function points(state = initialState, action) {

    switch (action.type) {
        case 'GET_MARKERS_REQUEST':
            return state

        case 'GET_MARKERS_SUCCESS':
            return {...state,
                points: action.payload,
                fetching: true
            }
        case 'GET_MARKERS_FAILED':
            return {...state,
                fetching: false
            }
        default:
            return state;

    }


}
