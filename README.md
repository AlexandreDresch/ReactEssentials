# React Essentials

![cover](.github/image.png?style=flat)

Welcome to React Essentials—your go-to resource for mastering the fundamentals of React! This project is designed to provide an intuitive and beginner-friendly guide to understanding React's core concepts without unnecessary complexity.

You can access the deployed version of this project [here](https://react-essentials-woad.vercel.app).

## Features

- **Step-by-Step Guides**: Clear instructions to build and understand simple React components.
- **Interactive Examples**: Real-time code previews using React Code Preview.
- **Modern UI**: Built with ShadCn, offering sleek and responsive design.
- **Type-Safe Development**: Fully implemented with TypeScript for robust code.
- **Responsive Design**: Tailwind CSS ensures the app is mobile-friendly.
- **Efficient Navigation**: Powered by React Router for a smooth, multi-page experience.

## Tech Stack

- Framework: React with Vite for fast development and builds.
- Styling: Tailwind CSS for rapid, responsive design.
- UI Components: ShadCn for pre-built, customizable elements.
- Routing: React Router for easy navigation.
- Code Examples: React Code Preview for hands-on learning.
- Language: TypeScript for type-safe and maintainable code.

## Getting Started

### Prerequisites

- Node.js and npm (if running locally).
- Docker installed (if running with Docker).

## Running the Application

You can run this application either with Docker or locally on your machine.

### Option 1: Running with Docker

1. Clone the repository:

```bash
  https://github.com/AlexandreDresch/ReactEssentials.git
```

2. Navigate to the project directory:

```bash
  cd ReactEssentials
```

3. Build and start the Docker containers:

```bash
  docker-compose up --build
```

4. Open your browser and navigate to:

```bash
  http://localhost:5173
```

5. To stop the Docker containers:

```bash
  docker-compose down
```

### Option 2: Running Locally (Without Docker)

1. Clone the repository:

```bash
  https://github.com/AlexandreDresch/ReactEssentials.git
```

2. Navigate to the project directory:

```bash
  cd ReactEssentials
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. Open your browser and navigate to:

```bash
  http://localhost:5173
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Builds the project using TypeScript and Vite.
- **lint**: Runs ESLint to check for code quality.
- **preview**: Runs a Vite preview of the built app.