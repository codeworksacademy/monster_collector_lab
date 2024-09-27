import { AppState } from "../AppState.js";
import { regionsService } from "../services/RegionsService.js";
import { setHTML } from "../utils/Writer.js";

export class RegionsController {
  constructor() {
    AppState.on('activeRegion', this.drawRegionTitle)
    this.drawRegions()
  }

  setActiveRegion(regionName) {
    regionsService.setActiveRegion(regionName)
  }

  drawRegions() {
    const regions = AppState.regions
    let htmlContent = ''
    regions.forEach(region => htmlContent += region.radioButtonHTMLTemplate)
    setHTML('region-buttons', htmlContent)
  }

  drawRegionTitle() {
    setHTML('region', AppState.activeRegion.name)
  }
}