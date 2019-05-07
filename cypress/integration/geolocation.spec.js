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

      it('AND the browser provides a geolocation\n'
        + 'THEN the geolocation is shown.', () => {
        cy.visit('/', fakeLocation(48, 2));

        cy.get('[data-testid=coord-n]')
          .should('be.visible')
          .should('contain', 'N 48.0000000')
          .get('[data-testid=coord-e]')
          .should('be.visible')
          .should('contain', 'E 02.0000000');
      });
    });
  });
});
