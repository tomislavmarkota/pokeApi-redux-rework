import { useSelector, useDispatch } from 'react-redux';
import {getPokeData} from '../redux/actions';
import { useEffect } from 'react';
import { Container, NavLinkStyled, Card } from './StyledComponents';
import {SearchBar, Preloader} from './index';
import logo from '../img/Pokemon-Logo.png';



function Pokemons() {
  const pokeData = useSelector(state => state.Pokemon);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getPokeData("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if(pokeData.errorMsg){
    return <h3>{pokeData.errorMsg}</h3>
  }

  if(pokeData.loading){
    return <Preloader />
  }


  return (
    <>
    <SearchBar />
    <Container>
      <Card>
        <img src={logo} alt="pokemon logo" />
        {pokeData.data.results?.map(pokemon => {
          return (
            <div key={pokemon.name}>
                <h3>{pokemon.name.toUpperCase()}</h3>
                <div>
                  <NavLinkStyled bgcolor='#FFCB04' bordercolor='#395CA8' fontSize=".8em" to={`/pokeinfo/${pokemon.name}`}>More info</NavLinkStyled>
                </div>
            </div>
          );
        })}
      </Card>
    </Container>
    </>
  );
}

export default Pokemons;

