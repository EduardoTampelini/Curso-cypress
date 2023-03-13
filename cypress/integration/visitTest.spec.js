/*it('testa a página da política de privacidade de forma independente',()=>{
    cy.visit('./src/index.html');
    cy.get('#privacy a').should('have.attr','target','_blank')
    cy.get('#privacy a').invoke('removeAttr','target').as('notarget');
    cy.get('@notarget').should('not.have.attr','target');
    cy.get('@notarget').click();
    cy.contains('Talking About Testing').should('be.visible')
    
   })*/

   Cypress._.times(3, ()=>{
    it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
        cy.clock();
        cy.visit('./src/index.html');
    
      cy.get('#firstName').type('eduardo');
      cy.get('#lastName').type('tampelini');
      cy.get('#email').type('ezafalon2gamil.com');
      cy.get('#phone').type('4499770');
      cy.get('#open-text-area').type('apenas para teste', {delay: 0});
      cy.contains('button','Enviar').click();
      cy.get('.error').should('be.visible')
      cy.tick(3000);
      cy.get('.error').should('not.be.visible')
      
     })
  })