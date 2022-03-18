import { combineReducers } from "redux";
import PokemonDetailsReducer from "./PokemonDetailsReducer";
import PokemonInfoReducer from "./PokemonInfoReducer";
import PokemonListReducer from "./PokemonListReducer";


const RootReducer = combineReducers({
    Pokemon: PokemonListReducer,
    Info: PokemonInfoReducer,
    Details: PokemonDetailsReducer
});


export default RootReducer;