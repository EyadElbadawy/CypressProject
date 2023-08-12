class Search {
    searchUser(employeeUsername){
        cy.get(':nth-child(2) > .oxd-input').type(employeeUsername);
    }
    clickSubmit(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
    }
    clickEdit(){
        cy.get('.oxd-table-cell-actions > :nth-child(2)').click({ multiple: true });
    }
}
export default Search