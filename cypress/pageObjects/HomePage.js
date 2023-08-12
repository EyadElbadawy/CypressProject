class Home {
    verifyLogin(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text","Dashboard");
    }

    clickAdmin() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    }

    clickAdd(){
        cy.get('.orangehrm-header-container > .oxd-button').click();
    }
    
}
export default Home