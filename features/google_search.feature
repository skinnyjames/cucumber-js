Feature: Google search
  I can search Google

  Scenario: Basic Search
    Given I go to google
    When I search cats
    Then I get results
