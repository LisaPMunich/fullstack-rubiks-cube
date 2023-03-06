# Project: Fullstack Coding Cube

## Description of the project
This is a full-stack web application that allows a user to input a string to be encoded or decoded using a cryptographic algorithm. The logic for the encoding and decoding is implemented in the backend using NestJS. The frontend is built using Angular and utilizes PrimeNG and PrimeFlex as UI frameworks. The app uses a RESTful API to communicate between the frontend and backend.

![image](https://user-images.githubusercontent.com/117353352/222986470-bb2f4565-be8a-41ed-883c-98fb643cdaea.png)


## What I learned
In building this project, I learned how to use NestJS to build a RESTful API for handling HTTP requests and responses. I also learned how to use Angular to build the frontend of the application, including how to make HTTP requests to the backend API and update the UI based on the responses. Additionally, I gained experience in utilizing PrimeNG and PrimeFlex as UI frameworks.

## User stories
* As a user, I want to input a string to be encoded using a cryptographic algorithm.
* As a user, I want to input a string to be decoded using a cryptographic algorithm.
* As a user, I want to see the result of the encoding or decoding process displayed on the screen.

## Features
* **User input validation**: The app ensures that user input is valid before encoding or decoding the input.
* **Encoding and decoding**: The app can encode and decode input strings using a cryptographic algorithm.
* **RESTful API**: The app uses a RESTful API to communicate between the frontend and backend.
* **Responsive UI**: The UI is responsive and works on both desktop and mobile devices.
* **Error Handling**: The app provides informative error messages if the input "losungswort" does not meet the required format.
* **Helper Buttons**: The user can conveniently copy the encoded message and clear the fields of the decode card using dedicated buttons.

## Documentation and Testing of endpoints
The endpoints are documented using swagger. In order to run it, navigate to the backend directory and run ``npm run start``, then open ``localhost:3000/docs``
Here you can see the endpoints and schema:
![image](https://user-images.githubusercontent.com/117353352/223062883-f7acfcc2-2b57-43dc-a28a-18e1a3ce53e1.png)

The tests run successfully, here an example of the tests for the /encode endpoint:
![image](https://user-images.githubusercontent.com/117353352/223063342-fa2a2445-15b9-4993-8b6c-31d6c98d0581.png)
![image](https://user-images.githubusercontent.com/117353352/223063439-a2f6a747-2f18-432d-9f01-b7aa80cc8803.png)

## How to run it locally
* To run this app locally, you will need to have Node.js and npm installed on your machine.

* Clone the repository to your local machine.
* Navigate to the project directory in your terminal.
* Install the dependencies by running the following command: ``npm install``
* Build the Angular application by running the following command: ``ng build``
* Start the backend server by running the following command: ``npm run start:dev``
* Open a new terminal window and navigate to the project directory.
* Start the frontend server by running the following command: ``npm start``
* Open your web browser and go to http://localhost:3000 to see the app in action.