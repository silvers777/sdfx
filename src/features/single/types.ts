/// ////////////////////////////////////////////////////////////////////////////////
// DATA TYPES
/// ////////////////////////////////////////////////////////////////////////////////

export type AboutHero = {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: 157
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  name: string
  order: number
  species: {}
  sprites: {}
  stats: []
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  weight: 650
}

/// ////////////////////////////////////////////////////////////////////////////////
//  REDUX STATE
/// ////////////////////////////////////////////////////////////////////////////////

export type SingleState = {
  about: AboutHero | null
  loading: boolean
}
