# AgilRAD 2.0 BDD Testing

Behavior-Driven Development (BDD) Testing is a powerful and user-centric approach to software testing that emphasizes collaboration between developers, testers, and stakeholders.

## Introduction

Cucumber is a framework that facilitates Behavior-Driven Development (BDD). It allows you to express test scenarios in a simple text format (Given-When-Then format) and then link them to executable code. When running the Cucumber tests, it essentially associates the feature file with its corresponding step definition and executes the code therein. You have the flexibility to employ any assertion framework, to handle assertions within the code. Here we are using Playwright for assertions.

## Installation

1. Navigate to the folder after cloning and install npm packages.

   `npm install`

2. To download the necessary browsers for Playwright during the initial installation, execute the following command.

   `npx playwright install`

## Running the tests

1. To run the test cases, execute the following command.

   `npm run test`

2. To run only the failed test cases after the initial execution, use the following command.

   `npm run test:failed`

## Configuration

The details of the configuration can be found [here](https://github.com/cucumber/cucumber-js/tree/main/docs)

## Allure Reporting Tool

Allure is an open-source test reporting tool that provides visually appealing and comprehensive reports for test results.

After executing the test cases, the reports are automatically generated, eliminating the need for a separate command to run them.
