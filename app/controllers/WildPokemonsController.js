import { AppState } from "../AppState.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

export class WildPokemonsController {
  constructor() {
    AppState.on('wildPokemons', this.drawWildPokemons)
    AppState.on('activePokemon', this.drawActivePokemon)
    this.getWildPokemons()
  }

  async getWildPokemons() {
    try {
      wildPokemonsService.getWildPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async getWildPokemonDetailsByName(pokemonName) {
    try {
      await wildPokemonsService.getWildPokemonDetailsByName(pokemonName)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawWildPokemons() {
    const pokemons = AppState.wildPokemons
    let htmlContent = ''
    pokemons.forEach(pokemon => htmlContent += pokemon.listHTMLTemplate)
    setHTML('wild-pokemons', htmlContent)
  }

  drawActivePokemon() {
    setHTML('pokemon-details', AppState.activePokemon.detailsHTMLTemplate)
  }
}