it('testa a página da política de privacidade de forma independente',()=>{
    cy.visit('./src/index.html');
    cy.get('#privacy a').should('have.attr','target','_blank')
    cy.get('#privacy a').invoke('removeAttr','target').as('notarget');
    cy.get('@notarget').should('not.have.attr','target');
    cy.get('@notarget').click();
    cy.contains('Talking About Testing').should('be.visible')
    
   })