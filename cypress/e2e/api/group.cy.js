//normally this would have a better route name
let res;

describe('Get request to /9e343425-c47c-4c7f-a1ac-972c099be0ed', () => {
  beforeEach('makes a GET request and returns group data', () => {
    cy.request({
      method: 'get',
      url: Cypress.config('apiUrl') + '/9e343425-c47c-4c7f-a1ac-972c099be0ed',
    })
      .as('res')
      .then((res) => {
        expect(res.status).to.equal(200);
      });
  });

  it('should have the correct id for Group 1', () => {
    cy.get('@res').then((res) => {
      expect(res.body[0].id).contains('a9f6a4b7-d03c-4a45-b64b-791e054f36b8');
    });
  });

  it('should have the correct label for Group 1', () => {
    cy.get('@res').then((res) => {
      expect(res.body[0].label).contains('Group 1');
    });
  });

  it('should have the correct id for Group 2', () => {
    cy.get('@res').then((res) => {
      expect(res.body[1].id).contains('f1b01b57-3147-476a-a632-0c10ad2a3c1a');
    });
  });

  it('should have the correct label for Group 2', () => {
    cy.get('@res').then((res) => {
      expect(res.body[0].label).contains('Group 2');
    });
  });
});
