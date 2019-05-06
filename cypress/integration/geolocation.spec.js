describe('SCENARIO: Geolocation based features', function () {
  describe('GIVEN As traveller I am viewing the home page', function () {
    describe('WHEN querying the geolocation is allowed in the browser', function () {
      it('AND the browser provides a geolocation\n' +
        'THEN the geolocation is shown.', function () {
        cy.visit('/');

        expect('TODO: Find out how to enable geolocation tracking in the browser').to.be.false;
        expect('TODO: Find out how to specify a fake geolocation to be provided by the browser').to.be.false;

        cy.get('[data-testid=coord-n]')
          .should('be.visible')
          .should('contain', 'N 52.5090388')
          .get('[data-testid=coord-e]')
          .should('be.visible')
          .should('contain', 'E 13.3885079')
      })
    })
  })
});
