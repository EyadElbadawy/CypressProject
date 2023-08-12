class Edit {
    clearuser(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
    }
    enterNewUser(newUsername){
        cy.get(':nth-child(2) > .oxd-input').type(newUsername);
    }
    clickSave(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    }
}
export default Edit