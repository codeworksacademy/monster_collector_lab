import { AppState } from "../AppState.js";
import { DetailedPokemon, Pokemon } from "../models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js"

class WildPokemonsService {

  async getWildPokemons() {
    const response = await pokeAPI.get('pokemon')
    console.log('GOT POKEMONS', response.data);
    const wildPokemons = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
    AppState.wildPokemons = wildPokemons
  }

  async getWildPokemonDetailsByName(pokemonName) {
    const response = await pokeAPI.get(`pokemon/${pokemonName}`)
    console.log('GOT POKEMON DETAILS', response.data);
    const wildPokemon = new DetailedPokemon(response.data)
    AppState.activePokemon = wildPokemon
  }
}

export const wildPokemonsService = new WildPokemonsService()