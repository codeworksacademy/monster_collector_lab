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


export class DetailedPokemon extends Pokemon {
  constructor(data) {
    super(data)
    this.id = data.id ?? ''
    this.nickName = data.nickName ?? ''
    this.img = data.img ?? data.sprites.front_default
    this.backImg = data.backImg ?? data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health ?? data.stats[0].base_stat
    this.defense = data.defense ?? data.stats[2].base_stat
    this.attack = data.attack ?? data.stats[1].base_stat
    this.speed = data.speed ?? data.stats[5].base_stat
    this.types = data.types
  }

  get detailsHTMLTemplate() {
    return `
    <div
      class="border border-1 border-danger rounded text-success p-2 h-100 d-flex flex-column justify-content-between">
      <div class="border border-1 border-success rounded px-3 py-1 d-flex text-capitalize">
        <span>${this.name}</span>
      </div>
      <div class="d-flex justify-content-center">
        <img src="${this.img}" alt="Front of ${this.name}" class="w-25">
        <img src="${this.backImg}" alt="Back of ${this.name}" class="w-25">
      </div>
      <div>
        <div class="border border-1 border-success rounded p-3">
          <div class="mb-2 d-flex gap-2">
            ${this.typeSpans}
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Health:</span>
            <span>${this.health} hp</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Attack:</span>
            <span>${this.attack} ap</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Defense:</span>
            <span>${this.defense} dp</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Speed:</span>
            <span>${this.speed} sp</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Weight:</span>
            <span>${this.weightAsPounds} lbs</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Height:</span>
            <span>${this.heightAsFeet} ft</span>
          </div>
        </div>
        <div class="text-center mt-2">
          <button onclick="app.SandboxPokemonsController.catchPokemon()" class="btn btn-success">Catch em!</button>
        </div>
      </div>
    </div>
    `
  }

  get weightAsPounds() {
    return (this.weight / 4.536).toFixed(1)
  }

  get heightAsFeet() {
    return (this.height / 3.048).toFixed(1)
  }

  get typeSpans() {
    const icons = {
      normal: 'mdi-circle-outline',
      fighting: 'mdi-boxing-glove',
      flying: 'mdi-airplane',
      poison: 'mdi-skull-crossbones',
      ground: 'mdi-grass',
      rock: 'mdi-octagon',
      bug: 'mdi-bug',
      ghost: 'mdi-ghost',
      steel: 'mdi-',
      fire: 'mdi-fire',
      water: 'mdi-water',
      grass: 'mdi-leaf',
      electric: 'mdi-flash',
      psychic: 'mdi-head-cog',
      ice: 'mdi-delete-variant',
      dragon: 'mdi-snake',
      dark: 'mdi-brightness-4',
      fairy: 'mdi-candy-outline',
      stellar: 'mdi-crystal-ball',
      unknown: 'mdi-help'
    }

    let spans = ''

    this.types.forEach(typeObj => {
      const name = typeObj.type.name
      const icon = icons[name]
      spans += `
      <span class="bg-success text-capitalize rounded-pill text-dark px-2 py-1">
        <i class="fs-4 me-2 mdi ${icon}"></i><span>${name}</span>
      </span>`
    })
    return spans
  }
}