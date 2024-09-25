import { AppState } from "../AppState.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

export class SandboxPokemonsController {
  constructor() {
    AppState.on('user', this.drawMyPokemonElem)
    AppState.on('user', this.getMySandboxPokemons)
    AppState.on('user', () => { AppState.emit('activePokemon') })
    AppState.on('sandboxPokemons', this.drawSandboxPokemons)
    AppState.on('activePokemon', this.drawSandboxPokemons)
  }
  async catchPokemon() {
    try {
      const nickName = window.prompt("Give this pokemon a nickname!", AppState.activePokemon.name)
      if (nickName == null) return
      await sandboxPokemonsService.catchPokemon(nickName)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async getMySandboxPokemons() {
    try {
      await sandboxPokemonsService.getMySandboxPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawMyPokemonElem() {
    const myPokemonsElem = document.getElementById('my-pokemons')
    myPokemonsElem.classList.remove('d-none')
  }

  drawSandboxPokemons() {
    if (!AppState.user) return
    const pokemons = AppState.sandboxPokemons
    let htmlContent = ''
    pokemons.forEach(pokemon => htmlContent += pokemon.listHTMLTemplate)
    setHTML('my-pokemons-list', htmlContent)
    setText('my-pokemons-count', pokemons.length)
  }
}