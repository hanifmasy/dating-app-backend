
# Dating App Backend

This is the backend for a Dating App, built with TypeScript, Express, and MongoDB. The backend provides various functionalities such as user registration, authentication, profile management, and premium features.

## Project Structure

The project structure is organized as follows:

```
dating-app-backend/
|-- src/
|   |-- models/
|       |-- user.ts
|   |-- routes/
|       |-- auth.ts
|       |-- profiles.ts
|       |-- premium.ts
|       |-- settings.ts
|   |-- app.ts
|-- node_modules/
|-- package.json
|-- tsconfig.json
```

- `src/`: Contains the source code of the application.
  - `models/`: Defines the Mongoose model for the user.
  - `routes/`: Contains route handlers for different functionalities (authentication, profiles, premium features, settings).
  - `app.ts`: Main application file.

## Getting Started

Follow these steps to set up and run the Dating App backend:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hanifmasy/dating-app-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dating-app-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Set up your MongoDB database and update the connection string in `app.ts`:

   ```typescript
   // app.ts
   mongoose.connect('your-mongodb-connection-string', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   ```

### Running the Application

1. Start the application:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

The following API endpoints are available:

- **User Authentication:**
  - `POST /auth/signup`: User registration.
  - `POST /auth/login`: User login.

- **Profiles:**
  - `GET /profiles`: Get profiles for swiping.

- **Swiping:**
  - `POST /swipe`: Swipe left or right.

- **Premium Features:**
  - `POST /premium/purchase`: Purchase premium package.

- **User Settings:**
  - `PUT /settings/update`: Update user settings.




  ### Running Unit Tests

  1. Navigate to the project directory:

     ```bash
     cd dating-app-backend
     ```

  2. Run the following command to execute the unit tests:

     ```bash
     npm test
     ```

     This will run the Jest test suite and display the results.

  ### Writing Additional Tests

  To add more unit tests, you can create test files in the `src/__tests__` directory. For example:

  - `src/__tests__/auth.test.ts`: Contains tests for the authentication routes.
  - `src/__tests__/profiles.test.ts`: Contains tests for the profile-related routes.
  - ...

  Write test cases using Jest's testing functions and assertions to cover various scenarios and edge cases.

  ### Test Coverage

  Jest will generate a coverage report after running the tests. You can view the coverage by opening the generated `coverage/index.html` file in your browser.
