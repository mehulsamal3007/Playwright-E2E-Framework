Feature: User Login

@testapi1
Scenario Outline: @testapi1 Verify valid login credentials via API
    When User enters "<email>" and "<password>" via API
    Then API should confirm the user exists

Examples:
 | email           | password |
 |mehul.samal3007@gmail.com | @Test123. |