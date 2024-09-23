import { AuthController } from './controllers/AuthController.js';
import { WildPokemonsController } from './controllers/WildPokemonsController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  WildPokemonsController = new WildPokemonsController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
