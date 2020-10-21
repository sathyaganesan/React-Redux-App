const initialState = {
        quote: '',
        // status: "",
        // image: "",
        loading: false,
   
}

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_QUOTE_START":
            return {
                ...state, loading: true
            };
        case "FETCHING_SUCCESS":
            return {
                ...state, quote: action.payload, loading: false
            };
        case "FETCHING_ERROR":
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
}