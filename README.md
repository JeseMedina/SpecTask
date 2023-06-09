# Spectask

Spectask is an application created using the MERN stack (MongoDB, Express,
React, and Node.js) and TypeScript. This application was developed with the aim
of deepening the learning of Node.js, Express, and Redux Toolkit technologies.

## Tabla de contenidos

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Author](#author)
- [Screenshots](#screenshots)
- [License](#license)

## Prerequisites

Before getting started, make sure you have the following requirements:

- Node.js installed.
- An instance of MongoDb for the database (it can be local or in the cloud).
- Basic knowledge of the technologies used in the PERN stack.

## Installation

Follow these steps to install and set up the Spectask project locally:

1. Clone the project repository.

```sh
  git clone https://github.com/JeseMedina/Spectask.git
```

2. Navigate to the `backend` folder and install the server dependencies:

```sh
  cd backend
  npm install
```

3. Create a .env file and configure the environment variables `PORT` and
   `JWT_SECRET`:
4. Navigate to the `frontend` folder and install the client dependencies:

```bash
  cd frontend
  npm install
```

5. Create another .env file and configure the environment variable
   `VITE_API_URL`.

Great! Now you have the Spectask project installed locally and you can start
using it.

## Database Configuration

The database configuration is located in the `mongo.ts` file within the
`backend/src/config` folder. You can modify this file to customize the
configuration of your database according to your needs.

Make sure you have MongoDB installed and adjust the connection parameters in the
`mongo.ts` file to match your database configuration.

Remember that any changes to the database configuration will require you to
restart the server for the changes to take effect.

Feel free to customize the database configuration according to your preferences
and requirements!

## Usage

Before starting the Spectask application, make sure that the MongoDB database is
running. This may involve starting the MongoDB service.

Once the database is ready, follow these steps:

1. In the `backend` folder, run the following command to start the server:

```bash
  npm run dev
```

2. In the `frontend` folder, run the following command to start the client:

```bash
  npm run dev
```

Enjoy using Spectask!

## Technologies Used

### Backend:

- TypeScript
- Node.js
- Express
- MongoDB
- Mongoose
- JWT

### Frontend:

- TypeScript
- React
- Axios
- Formik
- Redux Toolkit
- Tailwind CSS
- Vite

### Development Tools:

- ESLint
- Prettier
- Git
- GIthub

## Key Features

1. **User Authentication:** Implement a user authentication system using JWT
   (JSON Web Tokens) to allow users to register, log in, and access protected
   resources.

2. **CRUD Operations:** Create CRUD (Create, Read, Update, Delete) operations
   for different application resources.

3. **Database Interaction:** Use Mongoose and MongoDB to perform database
   operations such as querying, inserting, updating, and deleting records.

4. **Form Validation:** Utilize the Formik library for form validation in the
   frontend. Ensure proper validation is performed and display appropriate error
   messages to enhance the user experience.

5. **Global State Management:** Use Redux Toolkit to manage the global state of
   your application. This will allow efficient handling of shared data between
   components and real-time updates.

6. **Maintaining Clean Code:** Utilize Prettier and ESLint in the project to
   maintain clean and consistent code. Set appropriate coding rules and styles
   in ESLint to detect and fix errors and maintain a consistent code format.
   Additionally, use Prettier as a complementary tool to automatically format
   the code and ensure consistent appearance throughout the project.

7. **Styles and Design:** Use Tailwind CSS to style the application and create
   an appealing interface. Take advantage of predefined classes and responsive
   design utilities to facilitate development and UI design.

## Author

This project was developed by:

### Jesé Medina

- [Github](https://github.com/JeseMedina/)
- [Linkedin](https://www.linkedin.com/in/jesemedina/)
- [Portafolio](https://jesemedina.netlify.app/)

## Screenshots

![Login](https://github.com/JeseMedina/Spectask/blob/main/img/login.jpg?raw=true)
![signup](https://github.com/JeseMedina/Spectask/blob/main/img/signup.jpg?raw=true)
![Home](https://github.com/JeseMedina/Spectask/blob/main/img/home.jpg?raw=true)
![Add Task](https://github.com/JeseMedina/Spectask/blob/main/img/addtask.jpg?raw=true)

## License

MIT Public License v3.0 can be used commercially.
