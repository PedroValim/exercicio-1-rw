# Cypress Automation – Real World App (RWA)

This project uses **Cypress** to automate end-to-end tests for the **Login** and **User Registration** features of the **Cypress Real World App (RWA)**.  
The Real World App is a demo application created by the Cypress team to showcase real-world testing scenarios, patterns, and best practices.

The goal of this project is to practice advanced Cypress concepts as part of the *Guardião da Qualidade* learning journey.

---

## Features Automated

- Login with valid credentials
- Login with invalid credentials
- Successful user registration
- User registration with incomplete required fields

---

## Technologies Used

- Node.js
- Cypress
- JavaScript

---

## Installation

Install the project dependencies:

```bash
npm instal
```

## Running the Tests

Before running the tests, make sure the Real World App (RWA) is running locally.
By default, the application runs on:
```bash
http://localhost:3000
```
## Open Cypress Test Runner (UI Mode)
This command opens the Cypress graphical interface, allowing you to run and debug tests interactively.

```bash
npx cypress open
```

## Run Tests via Command Line (Headless Mode)
This command runs all tests in headless mode, ideal for CI environments.

```bash
npx cypress run
```
