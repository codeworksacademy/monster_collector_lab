import { DetailedPokemon, Pokemon } from './models/Pokemon.js'
import { Region } from './models/Region.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /** @type {Pokemon[]} */
  wildPokemons = []
  /** @type {DetailedPokemon} */
  activePokemon = null
  /** @type {DetailedPokemon[]} */
  sandboxPokemons = []
  /** @type {Region[]} */
  regions = [
    new Region('kanto'),
    new Region('johto'),
    new Region('hoenn'),
    new Region('sinnoh')
  ]
  /** @type {Region} */
  activeRegion = null
}

export const AppState = createObservableProxy(new ObservableAppState())