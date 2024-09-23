export class Pokemon {
  constructor(data) {
    this.name = data.name
  }

  get listHTMLTemplate() {
    return `
    <li class="d-flex gap-2 align-items-center mb-1">
      <i class="mdi mdi-pokeball"></i>
      <span>${this.name}</span>
    </li>
    `
  }
}

let data = {
  "name": "bulbasaur",
  "url": "https://pokeapi.co/api/v2/pokemon/1/"
}