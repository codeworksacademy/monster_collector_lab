export class Pokemon {
  constructor(data) {
    this.name = data.name
  }

  get listHTMLTemplate() {
    return `
    <li onclick="app.WildPokemonsController.getWildPokemonDetailsByName('${this.name}')" class="d-flex gap-2 align-items-center mb-1" role="button" title="See details for ${this.name}">
      <i class="mdi mdi-pokeball"></i>
      <span class="text-capitalize">${this.name}</span>
    </li>
    `
  }
}