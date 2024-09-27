import { AppState } from "../AppState.js"
import { DetailedPokemon, Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"
import { wildPokemonsService } from "./WildPokemonsService.js"

class SandboxPokemonsService {
  async catchPokemon(nickName) {
    const pokemonToCatch = AppState.activePokemon
    pokemonToCatch.nickName = nickName
    const response = await api.post('api/pokemon', pokemonToCatch)
    console.log('CAUGHT POKEMON', response.data);
    const caughtPokemon = new DetailedPokemon(response.data)
    AppState.sandboxPokemons.push(caughtPokemon)
    AppState.activePokemon = caughtPokemon
  }

  async getMySandboxPokemons() {
    const response = await api.get('api/pokemon')
    const myPokemons = response.data.map(pokePOJO => new DetailedPokemon(pokePOJO))
    AppState.sandboxPokemons = myPokemons
  }

  async releasePokemon() {
    const pokemonToRelease = AppState.activePokemon
    const response = await api.delete(`api/pokemon/${pokemonToRelease.id}`)
    console.log('RELEASED POKEMON 😢', response.data);
    const pokemonIndex = AppState.sandboxPokemons.findIndex(pokemon => pokemon.id == pokemonToRelease.id)
    AppState.sandboxPokemons.splice(pokemonIndex, 1)
    await wildPokemonsService.getWildPokemonDetailsByName(pokemonToRelease.name)
  }

  setActivePokemon(pokemonId) {
    const foundPokemon = AppState.sandboxPokemons.find(pokemon => pokemon.id == pokemonId)
    AppState.activePokemon = foundPokemon
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()