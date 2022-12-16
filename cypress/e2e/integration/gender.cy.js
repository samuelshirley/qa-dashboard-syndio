describe('Dashboard with Gender Tab selected', () => {
  beforeEach('visits page', () => {
    cy.visit(Cypress.config('baseUrl'));
    cy.get('#tab-gender > .tab-active').should('be.visible');
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

  it('#payEquityGap label should contain PAY EQUITY GAP', () => {
    cy.get('#payEquityGap > label').should('contain', 'PAY EQUITY GAP');
  });

  it('#payEquityGap description should contain Women earn 96¢ for every $1 earned by comparable men', () => {
    cy.get('#payEquityGap > p').should(
      'contain',
      'Women earn 96¢ for every $1 earned by comparable men'
    );
  });

  it('#employeeComparison label should contain EMPLOYEES IN COMPARISON', () => {
    cy.get('#employeeComparison > p').should(
      'contain',
      'EMPLOYEES IN COMPARISON'
    );
  });

  it('#employeeComparison description should contain Women make up 41% of employees', () => {
    cy.get('#employeeComparison > p').should(
      'contain',
      'Women make up 41% of employees'
    );
  });

  it('#budget label should contain BUDGET', () => {
    cy.get('#budget > p').should('contain', 'BUDGET');
  });

  it('#budget description should contain $235,900 minimum recommended buget to reduce pay equity gap', () => {
    cy.get('#budget > p').should(
      'contain',
      '$235,900 minimum recommended buget to reduce pay equity gap'
    );
  });
});
