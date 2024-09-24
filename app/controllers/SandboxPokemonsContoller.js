import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonsController {
  async catchPokemon() {
    try {
      const nickName = window.prompt("Give this pokemon a nickname!")
      await sandboxPokemonsService.catchPokemon(nickName)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}