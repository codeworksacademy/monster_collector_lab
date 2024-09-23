import { pokeAPI } from "./AxiosService.js"

class WildPokemonsService {
  async getWildPokemons() {
    const response = await pokeAPI.get('pokemon')
    console.log('GOT POKEMONS', response.data);

  }
}

export const wildPokemonsService = new WildPokemonsService()