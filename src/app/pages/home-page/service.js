import { gMaps } from '@/utils/api'

export const places = (value) => {
  return gMaps.placesAutoComplete({
    input: value,
    language: 'en',
    types: ['geocode'],
    components: {
      country: 'uk'
    }
  })
}

export const geocode = (value) => {
  return gMaps.reverseGeocode({
    place_id: value
  })
}

export const reverseGeocode = (value) => {
  return gMaps.reverseGeocode({
    latlng: value
  })
}
