import { shallowMount } from '@vue/test-utils';
import HomePage from '../../../src/home/HomePage.vue';

describe('HomePage', () => {
  describe('coords()', () => {
    const wrapper = shallowMount(HomePage);

    const mockGeolocation = {
      getCurrentPosition: jest.fn((success, error) => error()),
      watchPosition: jest.fn(),
    };

    navigator.geolocation = mockGeolocation;

    it('returns { 48, 2 }', () => {
      expect(wrapper.vm.coords).toEqual({ latitude: 48, longitude: 2 });
    });

    it('when geolocation rejected then returns undefined', () => {
      expect(wrapper.vm.coords).toEqual({ latitude: undefined, longitude: undefined });
    });
  });
});
