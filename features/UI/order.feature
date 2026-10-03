Feature: Order Product

@test3 @ui @checkout @order
Scenario Outline: @test3 Successful login with valid credentials
    Given User launch the application
    When User navigates to login page
    And User enters "<email>" and "<password>"
    And User clicks on the login button
    Then User should be logged in successfully
    When User click on "<productName>" Product View button
    Then User should navigate to Product View page "<productName>"
    And User enters the quantity "<quantity>"
    And User click on Add to Cart button
    Then User should see the "Added!" confirmation message
    And User clicks on Continue Shopping button
    And User click on Cart button in PDP
    Then User should see the product "<productName>" with quantity <quantity> in the cart
    And User clicks on Proceed To Checkout button
    Then User should see the address details and review order
    Then User clicks on Place Order button

Examples:
 | email           | password | productName | quantity |
 |mehul.samal3007@gmail.com | @Test123. | Sleeveless Dress | 4  |