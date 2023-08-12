class AddUser {
    enteringUserRole(){
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{enter}');    
    }
    enteringEmployeeName(){
        cy.get('.oxd-autocomplete-text-input > input').type('a');
        cy.wait(3000);
        cy.get('.oxd-autocomplete-text-input > input').type('{downArrow}');
        cy.get('.oxd-autocomplete-text-input > input').type('{downArrow}');
        cy.get('.oxd-autocomplete-text-input > input').type('{enter}');
    }
    enteringStatus(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{enter}');
    }
    setUserName(employeeUsername){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeeUsername);
    }
    setPassword(employeePassword){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeePassword);
    }
    setConfirmPassowrd(employeeConfirmPassword){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeeConfirmPassword);
    }
    clickSubmit(){
        cy.get('.oxd-button--secondary').click();
    }
}
export default AddUser