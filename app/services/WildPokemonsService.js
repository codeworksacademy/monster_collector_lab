import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js"

class WildPokemonsService {
  async getWildPokemons() {
    const response = await pokeAPI.get('pokemon')
    console.log('GOT POKEMONS', response.data);
    const wildPokemons = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
    AppState.wildPokemons = wildPokemons
  }
}

export const wildPokemonsService = new WildPokemonsService()