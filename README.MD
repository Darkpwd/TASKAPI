\# Task Manager API

A simple and powerful task management API built using Node.js, Express,
and MongoDB. This API allows users to create, manage, update, and delete
tasks, providing a straightforward solution for managing personal or
team projects.

\## Features

\- \*\*Task CRUD Operations\*\*: Create, read, update, and delete tasks.

\- \*\*User Authentication\*\*: Secure user login and registration with
JWT (JSON Web Token) authentication.

\- \*\*Custom Error Handling\*\*: Centralized error management to
provide clear and concise error responses.

\- \*\*Validation\*\*: Request data validation to ensure task data is
correct and consistent.

\- \*\*Task Filtering\*\*: Filter tasks based on status (completed,
pending, etc.).

\- \*\*Task Sorting\*\*: Sort tasks by different fields such as priority
or creation date.

\## Technologies Used

\- \*\*Node.js\*\*: JavaScript runtime for building the API.

\- \*\*Express\*\*: Web framework for building the server and handling
HTTP requests.

\- \*\*MongoDB\*\*: NoSQL database to store tasks and user information.

\- \*\*Mongoose\*\*: MongoDB object modeling library for Node.js.

\- \*\*JWT (JSON Web Token)\*\*: For secure user authentication and
authorization.

\- \*\*Bcrypt\*\*: Password hashing for secure user authentication.

\## Installation

\### Prerequisites

Make sure you have Node.js and MongoDB installed. If you don't have
Node.js installed, you can download it from
\[here\](https://nodejs.org/).

\### Step-by-Step Installation

1\. Clone the repository:

\`\`\`bash

git clone https://github.com/Darkpwd/Api_TASK.git

Navigate to the project directory:

bash

Copy code

cd Api_TASK

Install the required dependencies:

bash

Copy code

npm install

Create a .env file at the root of the project and add the following
environment variables:

env

Copy code

PORT=3000

MONGO_URI=mongodb://localhost:27017/task-manager

JWT_SECRET=your_jwt_secret

Replace your_jwt_secret with a strong secret key for JWT signing.

Ensure MongoDB is running on your machine or use a remote MongoDB
service.

Start the development server:

bash

Copy code

npm start

The API will be accessible at http://localhost:3000.

Endpoints

1\. User Authentication

POST /api/v1/auth/register: Register a new user.

Request body:

json

Copy code

{

"name": "John Doe",

"email": "johndoe@example.com",

"password": "password123"

}

POST /api/v1/auth/login: Log in an existing user.

Request body:

json

Copy code

{

"email": "johndoe@example.com",

"password": "password123"

}

Response:

json

Copy code

{

"token": "JWT_TOKEN"

}

2\. Task Operations

GET /api/v1/tasks: Get a list of all tasks.

Query parameters (optional):

completed=true/false: Filter tasks by completion status.

sort=priority: Sort tasks by priority.

Response:

json

Copy code

\[

{

"id": "task1",

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high",

"completed": false

},

...

\]

POST /api/v1/tasks: Create a new task.

Request body:

json

Copy code

{

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high"

}

GET /api/v1/tasks/:id: Get a single task by ID.

Response:

json

Copy code

{

"id": "task1",

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high",

"completed": false

}

PUT /api/v1/tasks/:id: Update an existing task.

Request body:

json

Copy code

{

"title": "Complete project",

"description": "Finish the project by the end of the month",

"priority": "medium",

"completed": true

}

DELETE /api/v1/tasks/:id: Delete a task by ID.

Response:

json

Copy code

{

"message": "Task deleted successfully"

}

Error Handling

The API uses a custom error handling mechanism. If an error occurs
during any request, the response will have the following format:

json

Copy code

{

"error": {

"message": "Error message",

"status": 400

}

}

Common Error Responses

400 Bad Request: The request is invalid or incomplete.

401 Unauthorized: Authentication is required.

404 Not Found: The requested resource could not be found.

500 Internal Server Error: A server error occurred.

Example of Usage

Register a new user:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/auth/register -H
"Content-Type: application/json" -d '{"name": "Jane Doe", "email":
"janedoe@example.com", "password": "password123"}'

Login and get the JWT token:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/auth/login -H "Content-Type:
application/json" -d '{"email": "janedoe@example.com", "password":
"password123"}'

Create a new task:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/tasks -H "Authorization:
Bearer JWT_TOKEN" -H "Content-Type: application/json" -d '{"title":
"Finish homework", "description": "Complete all assignments",
"priority": "high"}'

Get all tasks:

bash

Copy code

curl http://localhost:3000/api/v1/tasks -H "Authorization: Bearer
JWT_TOKEN"

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request.

\# Task Manager API

A simple and powerful task management API built using Node.js, Express,
and MongoDB. This API allows users to create, manage, update, and delete
tasks, providing a straightforward solution for managing personal or
team projects.

\## Features

\- \*\*Task CRUD Operations\*\*: Create, read, update, and delete tasks.

\- \*\*User Authentication\*\*: Secure user login and registration with
JWT (JSON Web Token) authentication.

\- \*\*Custom Error Handling\*\*: Centralized error management to
provide clear and concise error responses.

\- \*\*Validation\*\*: Request data validation to ensure task data is
correct and consistent.

\- \*\*Task Filtering\*\*: Filter tasks based on status (completed,
pending, etc.).

\- \*\*Task Sorting\*\*: Sort tasks by different fields such as priority
or creation date.

\## Technologies Used

\- \*\*Node.js\*\*: JavaScript runtime for building the API.

\- \*\*Express\*\*: Web framework for building the server and handling
HTTP requests.

\- \*\*MongoDB\*\*: NoSQL database to store tasks and user information.

\- \*\*Mongoose\*\*: MongoDB object modeling library for Node.js.

\- \*\*JWT (JSON Web Token)\*\*: For secure user authentication and
authorization.

\- \*\*Bcrypt\*\*: Password hashing for secure user authentication.

\## Installation

\### Prerequisites

Make sure you have Node.js and MongoDB installed. If you don't have
Node.js installed, you can download it from
\[here\](https://nodejs.org/).

\### Step-by-Step Installation

1\. Clone the repository:

\`\`\`bash

git clone https://github.com/Darkpwd/Api_TASK.git

Navigate to the project directory:

bash

Copy code

cd Api_TASK

Install the required dependencies:

bash

Copy code

npm install

Create a .env file at the root of the project and add the following
environment variables:

env

Copy code

PORT=3000

MONGO_URI=mongodb://localhost:27017/task-manager

JWT_SECRET=your_jwt_secret

Replace your_jwt_secret with a strong secret key for JWT signing.

Ensure MongoDB is running on your machine or use a remote MongoDB
service.

Start the development server:

bash

Copy code

npm start

The API will be accessible at http://localhost:3000.

Endpoints

1\. User Authentication

POST /api/v1/auth/register: Register a new user.

Request body:

json

Copy code

{

"name": "John Doe",

"email": "johndoe@example.com",

"password": "password123"

}

POST /api/v1/auth/login: Log in an existing user.

Request body:

json

Copy code

{

"email": "johndoe@example.com",

"password": "password123"

}

Response:

json

Copy code

{

"token": "JWT_TOKEN"

}

2\. Task Operations

GET /api/v1/tasks: Get a list of all tasks.

Query parameters (optional):

completed=true/false: Filter tasks by completion status.

sort=priority: Sort tasks by priority.

Response:

json

Copy code

\[

{

"id": "task1",

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high",

"completed": false

},

...

\]

POST /api/v1/tasks: Create a new task.

Request body:

json

Copy code

{

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high"

}

GET /api/v1/tasks/:id: Get a single task by ID.

Response:

json

Copy code

{

"id": "task1",

"title": "Complete project",

"description": "Finish the project by the end of the week",

"priority": "high",

"completed": false

}

PUT /api/v1/tasks/:id: Update an existing task.

Request body:

json

Copy code

{

"title": "Complete project",

"description": "Finish the project by the end of the month",

"priority": "medium",

"completed": true

}

DELETE /api/v1/tasks/:id: Delete a task by ID.

Response:

json

Copy code

{

"message": "Task deleted successfully"

}

Error Handling

The API uses a custom error handling mechanism. If an error occurs
during any request, the response will have the following format:

json

Copy code

{

"error": {

"message": "Error message",

"status": 400

}

}

Common Error Responses

400 Bad Request: The request is invalid or incomplete.

401 Unauthorized: Authentication is required.

404 Not Found: The requested resource could not be found.

500 Internal Server Error: A server error occurred.

Example of Usage

Register a new user:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/auth/register -H
"Content-Type: application/json" -d '{"name": "Jane Doe", "email":
"janedoe@example.com", "password": "password123"}'

Login and get the JWT token:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/auth/login -H "Content-Type:
application/json" -d '{"email": "janedoe@example.com", "password":
"password123"}'

Create a new task:

bash

Copy code

curl -X POST http://localhost:3000/api/v1/tasks -H "Authorization:
Bearer JWT_TOKEN" -H "Content-Type: application/json" -d '{"title":
"Finish homework", "description": "Complete all assignments",
"priority": "high"}'

Get all tasks:

bash

Copy code

curl http://localhost:3000/api/v1/tasks -H "Authorization: Bearer
JWT_TOKEN"

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request.
