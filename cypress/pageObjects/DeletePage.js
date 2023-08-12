class Delete {
    searchNewUser(newUsername){
        cy.get(':nth-child(2) > .oxd-input').type(newUsername);
    }
    clickSearch(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
    }
    clickDelete(){
        cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    }
    confirmDelete(){
        cy.get('.oxd-button--label-danger').click();
    }
}
export default Delete