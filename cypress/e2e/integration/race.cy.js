describe('Dashboard with Race Tab selected', () => {
  beforeEach('visits page and selects race tab', () => {
    cy.visit(Cypress.config('baseUrl'));
    cy.get('#tab-race > .tab').click();
    cy.get('#tab-race > .tab-active').should('be.visible');
  });
  it('should show Group 1 in header', () => {
    cy.get('#dropdown-button').should('contain', 'Group 1');
  });

  it('should show Group 2 in header drop down', () => {
    cy.get('#dropdown-button').click();
    cy.get('#f1b01b57-3147-476a-a632-0c10ad2a3c1a').should(
      'contain',
      'Group 2'
    );
  });

  it('#payEquityGap label should contain HISPANICS', () => {
    cy.get('#payEquityGap > label').should('contain', 'HISPANICS');
  });

  it('#payEquityGap description should contain Hispanics earn 86¢ for every $1 earned by comparable whites', () => {
    cy.get('#payEquityGap > p').should(
      'contain',
      'Hispanics earn 86¢ for every $1 earned by comparable whites'
    );
  });

  it('#employeeComparison label should contain EMPLOYEES IN COMPARISON', () => {
    cy.get('#employeeComparison > p').should(
      'contain',
      'EMPLOYEES IN COMPARISON'
    );
  });

  it('#employeeComparison description should contain Hispanics make up 21% of employees', () => {
    cy.get('#employeeComparison > p').should(
      'contain',
      'Hispanics make up 21% of employees'
    );
  });

  it('#budget label should contain BUDGET', () => {
    cy.get('#budget > p').should('contain', 'BUDGET');
  });

  it('#budget description should contain $535,000 minimum recommended buget to reduce pay equity gap', () => {
    cy.get('#budget > p').should(
      'contain',
      '$535,000 minimum recommended buget to reduce pay equity gap'
    );
  });
});
