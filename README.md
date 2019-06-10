# Project setup guide line.

Follow below commands in cmd/terminal:  
- npm install -g protractor (install Protractor)   
- webdriver-manager update (this will install Server and ChromeDriver)   
- webdriver-manager start (This will start Server)  
- npm install (This will install all the dependencies from package.json. Make sure to run in Project root directory)  
- npm test (This will run the tests. Make sure to run in Project root directory)

### Note: 
Run step 1-3 in one command prompt & use another command prompt for step 4-5

## How test works ?

### Test flow:
- *BeforeEach* :  If email id is changed in 'testData.json' file then Login to application, if unchanged and has <temp> in email id, this will create new email for Signup.
- 1st Test case : This test case will fill in all the details provided in 'testData.json'
- AfterEach : Log out from the application.
- 2nd Test case : This test case will verify all the fields from the site with data from 'testData.json'

