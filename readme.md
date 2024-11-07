# Incubyte assignment :

# StringCalculator - TDD Kata

This is an implementation of the **String Calculator** problem following Test-Driven Development (TDD) principles.
The goal of this project is to create a calculator that can add numbers provided in a string format with various delimiters.

## Features

- **Handles empty strings**.
- **Handles single numbers**.
- **Handles two numbers separated by a comma**.
- **Handles numbers separated by newlines**.
- **Supports custom delimiters**.

## Prerequisites

- Node.js (for JavaScript implementation)
- Jest test framework

## Setup

Clone the repository and install dependencies:
- git clone <WEB_URL>
- cd <repository-directory>
- npm install


## Execution 
- npm test ( To run the test cases )


## Test Cases

- **Test Case 1**: If the input string is empty, return 0.
- **Test Case 2**: If the input is a single number, return the number itself.
- **Test Case 3**: If the input has two numbers separated by a comma, return their sum.
- **Test Case 4**: If the input has numbers separated by newlines, return their sum.
- **Test Case 5**: If the input uses a custom delimiter, handle it properly.