const initialState = {
    points: [],
    fetching: false

}

export default function points(state = initialState, action) {

    switch (action.type) {
        case 'GET_POINTS_REQUEST':
            return state

        case 'GET_POINTS_SUCCESS':
            return {...state,
                points: action.payload,
                fetching: true
            }
        case 'GET_POINTS_FAILED':
            return {...state,
                fetching: false
            }
        default:
            return state;

    }


}
