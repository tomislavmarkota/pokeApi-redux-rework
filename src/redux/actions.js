export const getPokeData = (url) => async (dispatch) => {
    try{
        dispatch({type: "FETCH_POKEMONS_LOADING"})

        const fetchData = await fetch(url);
        const res = await fetchData.json();

        dispatch({type: "FETCH_POKEMONS_SUCCESS", pokeData: res})

    }catch(e){
        dispatch({ type: "FETCH_POKEMONS_ERROR" })
    }
}



export const getPokeInfo = (name) => async (dispatch) => {
    try{
        dispatch({type: "FETCH_POKEINFO_LOADING"})
        
        const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const res = await fetchData.json();

        dispatch({type: "FETCH_POKEINFO_SUCCESS", pokeInfo: res, pokeName: name})

    }catch(e){
        dispatch({type: "FETCH_POKEINFO_ERROR"})
    }
}

export const getPokeDetails = (url) => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DETAILS_LOADING"})

        const fetchData = await fetch(url)
        const res = await fetchData.json();

        dispatch({type: "FETCH_DETAILS_SUCCESS", pokeDetails: res})

    }catch(e){
        dispatch({type: "FETCH_DETAILS_ERROR"})
    }
}