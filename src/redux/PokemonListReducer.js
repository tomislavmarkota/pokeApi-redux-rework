
const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
} 

const PokemonListReducer = (state = DefaultState, action) => {
    switch(action.type){
        case "FETCH_POKEMONS_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "FETCH_POKEMONS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.pokeData,
                errorMsg: ""
            }
        case "FETCH_POKEMONS_ERROR": 
        return {
            ...state,
            loading: false,
            errorMsg: "Unable to fetch this pokemon"
        }
        default: return state;
    }
}


export default PokemonListReducer;