import filter from '../../../src/shared/gps-coordinate-filter';

describe('gps-coordinate-filter', () => {
  it('(lat, lng) = (52.509034,13.390693)', () => {
    result = filter({latitude: 52.509034, longitude: 13.390693});
  })
})
