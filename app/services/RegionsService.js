import { AppState } from "../AppState.js"

class RegionsService {
  setActiveRegion(regionName) {
    const foundRegion = AppState.regions.find(region => region.name == regionName)
    AppState.activeRegion = foundRegion
  }
}


export const regionsService = new RegionsService()