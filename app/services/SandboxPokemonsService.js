import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
  async catchPokemon(nickName) {
    const pokemonToCatch = AppState.activePokemon
    pokemonToCatch.nickName = nickName
    const response = await api.post('api/pokemon', pokemonToCatch)
    console.log('CAUGHT POKEMON', response.data);
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()