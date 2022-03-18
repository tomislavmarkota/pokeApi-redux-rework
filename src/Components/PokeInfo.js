import React, {useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { CardInfo, NavLinkStyled, Circle } from './StyledComponents';
import {PokeDetails, Preloader } from './index';
import {getPokeInfo} from '../redux/actions';
import _ from 'lodash'

export default function PokeInfo() {
    const pokeInfo = useSelector(state => state.Info);
    const dispatch = useDispatch();
    const [ palette, setPalette ] = useState("");
    let {name} = useParams();
    const url = pokeInfo.data[name]?.abilities[0].ability.url
    

    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#EEEEEE',
      fighting: '#E6E0D4',
      normal: '#EEEEEE',
    };

    

    useEffect(() => {
      dispatch(getPokeInfo((name)));
      
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

 
    useEffect(() => {
      const colorChange = () => {
        const pokemonType = pokeInfo.data[name]?.types[0].type.name;
        setPalette(colors[pokemonType]);
      }
      colorChange();

    })
   
    const ShowPokemon = () => {
      if(!_.isEmpty(pokeInfo.data[name])){
        return (
          <>
            <CardInfo>
              <Circle bgcolor={palette}>
                <img src={pokeInfo.data[name]?.sprites.other.dream_world.front_default} alt={name} />
              </Circle>
              <h2>{pokeInfo[name]?.name.toUpperCase()}</h2>
              <h5>Pokemon type:</h5>
              <p>{pokeInfo.data[name]?.types[0].type.name}</p>
              <PokeDetails url={url}/>
              <NavLinkStyled bgcolor={palette} bordercolor={palette} fontSize="1.5em" to="/" >Back</NavLinkStyled>
            </CardInfo>
          </>
        );
      }
      if(pokeInfo.loading) return <Preloader />
      if(pokeInfo.errorMsg) return <h2>{pokeInfo.errorMsg}</h2>
    }
      
   
    
    return (
      <>
      {ShowPokemon()}
      </>
    );

      

      
      


}

