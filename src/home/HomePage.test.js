import Vue from 'vue';
import HomePage from 'HomePage.vue';

test('coords returns { 48, 2}', () => {
  expect(HomePage.computed.coords().to.be({ latitude: 48, longitude: 2 }));
});
