import filter from '@/shared/gps-coordinate-filter'
import filter from '@/shared/gps-coordinate-filter'

describe('gps-coordinate-filter', () => {
  it('(lat, lng) = (52.509034,13.390693)', () => {
    let result = filter({latitude: 52.509034, longitude: 13.390693});
  })
})
