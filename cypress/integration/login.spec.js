describe('Page connexion', () => {
  describe('Should render the screen', () => {
    it('Should render title and input fields', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('h1').contains('Bonjour');
      cy.get('input[name="username"]');
      cy.get('input[name="password"]');
    });

    it('Should call http request api to get token', () => {
      // The new page should contain an h1 with "About page"
      cy.get('input[name="username"]').type('admin@admin');
      cy.get('input[name="password"]').type('cv');
      cy.get('#submitbtn').click();
      cy.url().should('contain', 'http://localhost:3000/profil');
      cy.get('h2').contains('Gérer votre compte');
    });

    it('it should log out', () => {
      // The new page should contain an h1 with "About page"
      cy.get('#menuid').click();
      cy.get('a').contains('Logout').click();
    });
  });
});
