describe('SCENARIO: Geolocation based features', () => {
  describe('GIVEN As traveller I am viewing the home page', () => {
    describe('WHEN querying the geolocation is allowed in the browser', () => {
      // https://github.com/cypress-io/cypress/issues/2671
      function fakeLocation(latitude, longitude) {
        return {
          onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, 'getCurrentPosition', (cb, err) => {
              if (latitude && longitude) {
                return cb({ coords: { latitude, longitude } });
              }
              throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
            });
          },
        };
      }

      const tests = [
        { coord: { lat: 48, long: 2 }, expected: 'N 48° 00.000\' E 002° 00.000\'' },
        { coord: { lat: 51, long: 13.999999 }, expected: 'N 51° 00.000\' E 013° 57.333\'' }
      ];

      tests.forEach(function(test) {
        it(`AND the browser provides the location ${test.coord.lat}, ${test.coord.long}
          THEN the geolocation ${test.expected} is shown.`, () => {
          cy.visit('/', fakeLocation(test.coord.lat, test.coord.long));

          cy.get('[data-testid=coord]')
            .should('be.visible')
            .should('contain', test.expected)
        });
      });
    });
  });
});
