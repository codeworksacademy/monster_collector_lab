import { AppState } from "../AppState.js"
import { DetailedPokemon, Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
  async catchPokemon(nickName) {
    const pokemonToCatch = AppState.activePokemon
    pokemonToCatch.nickName = nickName
    const response = await api.post('api/pokemon', pokemonToCatch)
    console.log('CAUGHT POKEMON', response.data);
    const caughtPokemon = new DetailedPokemon(response.data)
    AppState.sandboxPokemons.push(caughtPokemon)
  }

  async getMySandboxPokemons() {
    const response = await api.get('api/pokemon')
    const myPokemons = response.data.map(pokePOJO => new DetailedPokemon(pokePOJO))
    AppState.sandboxPokemons = myPokemons
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()