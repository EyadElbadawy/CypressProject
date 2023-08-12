OrangeHRM GUI testing using Cypress

 # ✨ *AutomationExercise* ==> *GUI* *Test Automation* ✨
## 📌   Automate different functionalities on an E-commerce website called *"AutomationExercise"* 
### 🌐Website URL: https://opensource-demo.orangehrmlive.com/
<img width="956" alt="image" src="https://github.com/EyadElbadawy/CypressProject/assets/102863069/a72c75ce-79bf-4300-b7a2-a5973b6f8851"># CypressProject

 

 
- ### 📝 The main Frameworks included in the project:
 **Cypress on the Top of:**
 
 *Mocha*
 
 *Chai *
 
 *HTML Reports*
 
 
-  ### 🏗️ Project Design:
 *Page Object Model (POM) design pattern: I have implemented the POM design pattern, making the project clean and easy to understand. By encapsulating web elements and related actions within separate classes, the codebase becomes modular and maintainable. This approach enhances code reusability and readability, making it a breeze to manage and update test scenarios.
Data Driven Approach*
 
 *Data Driven framework*
 
 *Fluent design approach*
 
 ![Screenshot allure Report](https://www.linkpicture.com/q/testngXML_2.jpg)
![summary-reports2222](https://www.linkpicture.com/q/summaryReport_5.jpg)

 
 - ### 🔍️ Covered Test cases in this project :
#### ✅Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3.✏️Verify that home page is visible successfully

4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8.✏️Verify that 'ENTER ACCOUNT INFORMATION' is visible

9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14.✏️Verify that 'ACCOUNT CREATED!' is visible

15. Click 'Continue' button
16.✏️Verify that 'Logged in as username' is visible

17. Click 'Delete Account' button
18.✏️Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

#### ✅Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

#### ✅Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

#### ✅Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page

#### ✅Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible

#### ✅Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

#### ✅Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

#### ✅Test Case 9: Search Product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible

#### ✅Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible


 
 



#### 🏷️ NB: If you wish to use SHAFT with IntelliJ please apply these settings:
Run/Debug Configurations > Edit Configurations... > Templates > TestNG > Configuration > Listeners > Add all SHAFT_Engine Listeners [AlterSuite, InvokedMethod, Suite]






 
