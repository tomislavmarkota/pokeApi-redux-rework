import React  from 'react'
import { useEffect } from 'react'
import { getPokeDetails} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


export default function PokeDetails({ url }) {
    const dispatch = useDispatch();
    const pokeAbilities = useSelector(state => state.Details);
    const lang = pokeAbilities.data.effect_entries?.[0].language.name;
    const effectLangOne = pokeAbilities.data.effect_entries?.[1].effect;
    const effectLangTwo = pokeAbilities.data.effect_entries?.[0].effect;
    const shortEffLangOne = pokeAbilities.data.effect_entries?.[1].short_effect;
    const shortEffLangTwo = pokeAbilities.data.effect_entries?.[0].short_effect;
  



    useEffect(() => {
      dispatch(getPokeDetails(url))
    }, [])


    if(pokeAbilities.loading){
        return <h2>Loading...</h2>
    }
    if(pokeAbilities.errorMsg){
        return <h2>{pokeAbilities.errorMsg}</h2>
    }

    return (
      <>
        <h2>Details</h2>
        <h4>Effect</h4>
        <p>{lang === "de" ? effectLangOne : effectLangTwo }</p>
        <h4>Short effect:</h4>
        <p>{lang === "de" ? shortEffLangOne : shortEffLangTwo}</p>
      </> 
    )
}


/*
 const lang = pokeAbilities.data.effect_entries[0].language.name;
    const effectLangOne = pokeAbilities.data?.effect_entries[1].effect;
    const effectLangTwo = pokeAbilities.data?.effect_entries[0].effect;
    const shortEffLangOne = pokeAbilities.data?.effect_entries[1].short_effect;
    const shortEffLangTwo = pokeAbilities.data?.effect_entries[0].short_effect;
*/
/*
<>
      <h2>Details</h2>
        <h4>Effect</h4>
        <p>{lang === "de" ? effectLangOne : effectLangTwo }</p>
        <h4>Short effect:</h4>
        <p>{lang === "de" ? shortEffLangOne : shortEffLangTwo}</p>
    </>

*/