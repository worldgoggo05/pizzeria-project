# Pizzeria Project Overview

## Project Description
This is a full-stack Food Delivery Application, specifically focused on pizza delivery. The project consists of two main parts: a backend service and a frontend application.

## Technical Stack

### Backend (Pizzeria - Backend)
- **Framework**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcrypt for password hashing
- **File Handling**: Multer for file uploads
- **Session Management**: Express-session with MongoDB session store
- **Additional Features**:
  - CORS enabled
  - Morgan for HTTP request logging
  - Cookie parser for handling cookies
  - EJS templating engine

### Frontend (Pizzeria - Frontend)
- **Framework**: React.js with TypeScript
- **State Management**: Redux Toolkit
- **UI Components**: Material-UI (MUI) with Joy UI
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Additional Features**:
  - Styled Components for styling
  - Swiper for carousel/slider components
  - SweetAlert2 for enhanced alerts
  - Moment.js for date handling
  - Universal Cookie for cookie management

## Project Structure

### Backend Structure
- `src/`
  - `controllers/`: Request handlers
  - `models/`: Database models
  - `views/`: EJS templates
  - `schema/`: Data validation schemas
  - `libs/`: Utility functions and libraries
  - `public/`: Static files
  - `router.ts`: Main API routes
  - `router-admin.ts`: Admin-specific routes
  - `app.ts`: Express application setup
  - `server.ts`: Server entry point

### Frontend Structure
- `src/`
  - `app/`: Main application components
  - `css/`: Stylesheets
  - `lib/`: Utility functions and shared code
  - `theme.ts`: MUI theme configuration

## Project Standards
- **Naming Conventions**:
  - Functions, methods, variables: camelCase
  - Classes: PascalCase
  - Folders and files: kebab-case
  - CSS: snake_case

## Features
Based on the project structure and dependencies, the application likely includes:
- User authentication and authorization
- Admin dashboard
- Pizza menu management
- Order processing
- File upload capabilities (possibly for pizza images)
- Shopping cart functionality
- Order tracking
- Responsive design

## Development Setup
- Backend runs on Node.js with TypeScript
- Frontend uses Create React App with TypeScript
- Both parts use environment variables for configuration
- Development servers available for both frontend and backend
