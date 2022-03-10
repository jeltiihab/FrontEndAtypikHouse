describe('Page Register', () => {
  describe('Should render the screen', () => {
    it('Should render title and input fields', () => {
      cy.visit('http://localhost:3000/register');
      cy.get('h1').contains('Bonjour');
      cy.get('input[name="lastName"]');
      cy.get('input[name="firstName"]');
      cy.get('select[name="userRole"]');
      cy.get('input[name="phone"]');
      cy.get('input[name="email"]');
      cy.get('input[name="password"]');
      cy.get('input[name="password_confirmation"]');
      cy.pause();
    });

    it('Should display matching errors', () => {
      cy.reload();
      cy.get('input[name="email"]').type('admin@admin');
      cy.get('input[name="password"]').type('cv');
      cy.get('input[name="password_confirmation"]').type('123');
      cy.get('#submitbtn').click();
      cy.get('span').contains("l'email doit être un mail valide");
      cy.get('span').contains(
        'Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial'
      );
      cy.get('span').contains('Le mot de passe ne correspond pas');
      cy.pause();
    });

    it('Should make a successful registration', () => {
      cy.reload();
      cy.get('input[name="lastName"]').type('jelti');
      cy.get('input[name="firstName"]').type('ihab');
      cy.get('select[name="userRole"]').select('Locataire');
      cy.get('select[name="sexe"]').select('Homme');
      cy.get('input[name="birthDate"]').type('1997/20/01');
      cy.get('input[name="phone"]').type('0707070707');
      cy.get('input[name="email"]').type('test2@gmail.com');
      cy.get('input[name="password"]').type('jelti.IHAB.2020');
      cy.get('input[name="password_confirmation"]').type('jelti.IHAB.2020');
      cy.pause();
      cy.get('#submitbtn').click();
      cy.wait(5000);
      cy.get('h3').contains('Merci de vous être inscrit à ATYPIK HOUSE');
    });
  });
});
