Feature: User Login

@test1 @ui
Scenario Outline: @test1 Successful login with valid credentials
    Given User launch the application
    When User navigates to login page
    And User enters "<email>" and "<password>"
    And User clicks on the login button
    Then User should be logged in successfully

Examples:
 | email           | password |
 |mehul.samal3007@gmail.com | @Test123. |

@test2 @ui
Scenario Outline: @test2 Successful login with valid credentials
    Given User launch the application
    When User navigates to login page
    And User enters "<email>" and "<password>"
    And User clicks on the login button
    Then User should get an error message "<errorMessage>"

Examples:
 | email           | password | errorMessage |
 |mehul.samal@gmail.com | @Test123. | Your email or password is incorrect! |