const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}


const PokemonDetailsReducer = (state = DefaultState, action) => {
    switch(action.type){
        case "FETCH_DETAILS_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "FETCH_DETAILS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.pokeDetails,
                errorMsg: ""
            }
        case "FETCH_DETAILS_ERROR":
            return {
                ...state,
                loading: false,
                errorMsg: "Failed to fetch details"
            }
        default: return state;
    }
}


export default PokemonDetailsReducer;