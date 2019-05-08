import { shallowMount } from '@vue/test-utils'
import HomePage from '../../src/home/HomePage';

test('coords returns { 48, 2 }', () => {
  const wrapper = shallowMount(HomePage);
  expect(wrapper.vm.coords).toEqual({ latitude: 48, longitude: 2 });
});
