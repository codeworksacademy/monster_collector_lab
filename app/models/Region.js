export class Region {
  constructor(name) {
    this.name = name
  }

  get radioButtonHTMLTemplate() {
    return `
    <input onchange="app.RegionsController.setActiveRegion('${this.name}')" type="radio" class="btn-check" name="btnradio" id="btn${this.name}" autocomplete="off" ${this.name == 'kanto' ? 'checked' : ''}>
    <label class="btn btn-outline-danger text-capitalize" for="btn${this.name}">${this.name}</label>
    `
  }

  get regionQuery() {
    switch (this.name) {
      case 'kanto':
        return '?limit=151&offset=0'
      case 'johto':
        return '?limit=100&offset=151'
      case 'hoenn':
        return '?limit=135&offset=251'
      case 'sinnoh':
        return '?limit=107&offset=386'
      default:
        return ''
    }
  }
}