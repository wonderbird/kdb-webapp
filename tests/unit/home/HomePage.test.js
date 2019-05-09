import { shallowMount } from '@vue/test-utils';
import HomePage from '../../../src/home/HomePage.vue';

describe('HomePage', () => {
  describe('coords()', () => {
    const wrapper = shallowMount(HomePage);

    it('returns { 48, 2 }', () => {
      const position = { latitude: 48, longitude: 2 };

      const mockGeolocation = {
        getCurrentPosition: jest.fn(success => success(position)),
      };

      navigator.geolocation = mockGeolocation;

      const coords = wrapper.vm.coords;

      expect(mockGeolocation.getCurrentPosition.mock.calls.length).toBe(1);
      expect(coords).toEqual({ latitude: 48, longitude: 2 });
    });

    it('when geolocation rejected then returns undefined', () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn((success, error) => error()),
      };

      navigator.geolocation = mockGeolocation;

      expect(mockGeolocation.getCurrentPosition.mock.calls.length).toBe(1);
      expect(wrapper.vm.coords).toEqual({ latitude: undefined, longitude: undefined });
    });
  });
});
