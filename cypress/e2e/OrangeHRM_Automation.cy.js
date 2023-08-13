import Login from "../pageObjects/LoginPage"
import Home from "../pageObjects/HomePage"
import AddUser from "../pageObjects/AddUserPage"
import Search from "../pageObjects/SearchPage"
import Edit from "../pageObjects/EditPage"
import Delete from "../pageObjects/DeletePage"

describe('Creating, editing & Deleting user in the database', function () {
  Cypress.on('uncaught:exception', function (err, runnable) {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  //runs before each test
  beforeEach(function () {
    // executes prior each test within it block
    cy.viewport(1224, 1068);
    cy.fixture('orangeHRM').as('data');
  })
  //run once before starting the test
  before(function () {
    cy.visit('/');
  })

  it('E2E user creation scenario', function () {

    cy.get('@data').then(function (data) {
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
    })

    //Home Page
    const hp = new Home();
    hp.verifyLogin();
    hp.clickAdmin();
    hp.clickAdd();

    // Add User
    cy.get('@data').then(function (data) {
      //choosing the role
      const ad = new AddUser();
      ad.enteringUserRole();
      // Entering Employee Name
      ad.enteringEmployeeName();
      // Entering status
      ad.enteringStatus();
      // Entering Employee username
      ad.setUserName(data.employeeUsername);
      //entering Employee Password
      ad.setPassword(data.employeePassword);
      //entering Employee confirmed passowrd
      ad.setConfirmPassowrd(data.employeePassword);
      //click submit
      ad.clickSubmit();
    })

    // Searching Employee
    cy.get('@data').then(function (data) {
      cy.wait(6000);
      const sp = new Search();
      //enter username
      sp.searchUser(data.employeeUsername);
      //click submit
      sp.clickSubmit();
      //click edit
      sp.clickEdit();
    })

    //Edit Employee
    cy.get('@data').then(function (data) {
      const ep = new Edit();
      //clear user
      ep.clearuser();
      //enter new user
      ep.enterNewUser(data.newUsername);
      //click save
      ep.clickSave();
    })

    // To Delete Employee
    cy.get('@data').then(function (data) {
      cy.wait(6000);
      const dp = new Delete();
      //search user
      dp.searchNewUser(data.newUsername);
      dp.clickSearch();
      dp.clickDelete();
      dp.confirmDelete();
    })

  })
})