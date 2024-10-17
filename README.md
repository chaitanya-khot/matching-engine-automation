# matching-engine-automation

Automation project using Cypress

## Project Objectives

The **Matching Engine Automation** project aims to provide an automated testing solution for the Matching Engine website using Cypress. The primary objective is to verify the functionality of the website, specifically focusing on navigation and element visibility in the **Repertoire Management Module**.

### Key Features:
- Automated navigation to the Matching Engine website.
- Expansion of the "Modules" section in the header.
- Accessing and validating the **Repertoire Management Module**.
- Scrolling and asserting the visibility of the **Additional Features** section.
- Validating the list of supported products under the heading **"There are several types of Product Supported:"**.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cypress](https://www.cypress.io/)

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository:**

   Clone the repository from bash using:
   git clone https://github.com/chaitanya-khot/matching-engine-automation.git
   
2. **Navigate to the Project Directory:**

  Open your terminal or command prompt and run:
  cd MatchingEngineAutomation

3. **Install Dependencies:**

  Install the required dependencies using npm:
  npm install

4. **Open Cypress:**

  Launch the Cypress Test Runner:
  npx cypress open

5. **Run the Tests:**

  Select the test file (e.g., spec.js) in the Cypress Test Runner to execute the automated tests.
