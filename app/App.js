import { AuthController } from './controllers/AuthController.js';
import { SandboxPokemonsController } from './controllers/SandboxPokemonsContoller.js';
import { WildPokemonsController } from './controllers/WildPokemonsController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  WildPokemonsController = new WildPokemonsController()
  SandboxPokemonsController = new SandboxPokemonsController()

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
