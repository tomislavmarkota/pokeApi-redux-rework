const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
}

const PokemonInfoReducer = (state = DefaultState, action) => {
    switch(action.type){
        case "FETCH_POKEINFO_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "FETCH_POKEINFO_SUCCESS":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokeName]: action.pokeInfo
                }  
            }
        case "FETCH_POKEINFO_ERROR":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to find this pokemon"
            }
        default: return state;
    }
}


export default PokemonInfoReducer;