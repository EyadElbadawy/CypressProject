OrangeHRM GUI testing using Cypress

 # ✨ *AutomationExercise* ==> *GUI* *Test Automation* ✨
## 📌   Automate different functionalities on an E-commerce website called *"AutomationExercise"* 
### 🌐Website URL: https://opensource-demo.orangehrmlive.com/
<img width="956" alt="image" src="https://github.com/EyadElbadawy/CypressProject/assets/102863069/a72c75ce-79bf-4300-b7a2-a5973b6f8851"># CypressProject

 

 
- ### 📝 The main Frameworks included in the project:
 **Cypress on the Top of:**
 
 *Mocha*
 
 *Chai*
 
 *HTML Reports*
 
 
-  ### 🏗️ Project Design:
 *Page Object Model (POM) design pattern: I have implemented the POM design pattern, making the project clean and easy to understand. By encapsulating web elements and related actions within separate classes, the codebase becomes modular and maintainable. This approach enhances code reusability and readability, making it a breeze to manage and update test scenarios.
Data Driven Approach*
 
 *Followed a Data Driven Approach using the Page Object Model and external file fixtures for reading data*
 
 *Generated comprehensive Cypress reports in HTML format, providing detailed insights into test execution. It includes test outcomes, screenshots, logs, and even video recordings, making debugging and troubleshooting a breeze.*

 *Leveraged Cypress Hooks like beforeEach and afterEach to optimize code and avoid repetition. These hooks execute specific actions before and after each test, making the test suite streamlined, efficient, and less error-prone.*
 
 <img width="960" alt="Screenshot 2023-08-12 191316" src="https://github.com/EyadElbadawy/CypressProject/assets/102863069/10e49c46-999b-49fa-a4ea-0426ebd614a9">
<img width="960" alt="Screenshot 2023-08-12 191433" src="https://github.com/EyadElbadawy/CypressProject/assets/102863069/0d5771f3-cdb2-491f-9fab-037bd6397383">


 
 - ### 🔍️ Covered Test case in this project :
#### ✅Test Case 1: Register User
1. Launch browser
2. Navigate to url '[http://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)'
3. Run in viewport(1224, 1068)

4. Click on 'Login' button
5. Enter 'admin' credentials
6. Click 'Signin' button
✏️Verify that 'dashboard' is visible

7. Go to admin portal
8. Add new user
9. Fill user info , username and password
10. Click enter to submit new User info

11. Search for New user
✏️Verify that 'New user' is visible

12. Edit 'New User' info

13. change 'New User' username

14. click on submit

15.Search for the modified 'username'    ✏️Verify that 'new username' is visible 

16.Delete 'new user' ✏️ Confirm the deletion of the user
