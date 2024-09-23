import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js"

export class WildPokemonsController {
  constructor() {
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
}