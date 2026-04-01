# E-Commerce Frontend

A modern, production-ready e-commerce frontend application built with React, TypeScript, and Vite.

## Overview

This is a TypeScript-based React application designed to demonstrate best practices in frontend development for e-commerce platforms. It features a responsive UI, type-safe code, and a scalable component architecture.

## Features

- ⚡ **Fast Development** – Powered by Vite for instant HMR
- 🎯 **Type-Safe** – Full TypeScript support with strict mode
- 🎨 **Component-Based** – Reusable, well-organized components
- 🛒 **Cart Management** – Context API for state management
- 📱 **Responsive Design** – Mobile-first approach
- 🧪 **Tested** – Jest-based unit tests with CI/CD integration
- 🔒 **Secure** – ESLint and TypeScript for code quality

## Technology Stack

- **Framework:** React 19
- **Language:** TypeScript 5.9
- **Build Tool:** Vite
- **Styling:** CSS/Tailwind CSS (configurable)
- **State Management:** React Context API
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/midega-g/e-commerce-demo.git
cd e-commerce-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Run tests
npm run test

# Run tests in CI mode
npm run test:ci
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── context/          # React context for state management
│   └── CartContext.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Cart.tsx
├── types.ts          # TypeScript type definitions
├── App.tsx           # Root component
└── main.tsx          # Entry point

public/               # Static assets
```

## Branch Strategy

This repository follows a branching strategy designed for professional development:

- **`main`** – Production-ready code, protected branch
  - All changes require peer review
  - Automated tests must pass (80% coverage)
  - Security scanning enabled
- **`dev`** – Development branch for features and fixes
  - Integration branch for PRs
  - Automated tests required (60% coverage)
  - Staging ground for main

## Contributing

We welcome contributions! Please follow this workflow:

1. **Create a feature branch** from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

3. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** to `dev`:
   - Provide a clear description of changes
   - Reference related issues (if any)
   - Ensure CI/CD checks pass

5. **Code Review**: Wait for review and address feedback

6. **Merge**: After approval, your PR will be merged

## CI/CD Pipeline

This project uses GitHub Actions for automated testing and quality checks:

### On Pull Requests
- ✅ Linting (ESLint)
- ✅ Type checking (TypeScript)
- ✅ Unit tests (Jest)
- ✅ Coverage reporting (minimum thresholds)
- ✅ Security scanning

### Branch Protection Rules

**`main` branch**:
- Requires 1 approval before merge
- Requires CI checks to pass
- Dismisses stale PR reviews
- Restricts who can dismiss reviews
- Prevents force pushes

**`dev` branch**:
- Requires CI checks to pass
- Allows faster iteration

## Code Quality Standards

We maintain high code quality through:

- **Linting:** ESLint configuration for consistent code style
- **Type Safety:** Strict TypeScript configuration
- **Testing:** Jest with minimum coverage thresholds
- **Formatting:** Consistent code formatting rules

### Running Quality Checks Locally

```bash
# Check for linting errors
npm run lint

# Run all tests
npm run test

# Run tests with coverage report
npm run test:ci
```

## Commit Convention

Please follow the Conventional Commits specification:

```
feat: add new feature
fix: fix a bug
docs: documentation changes
style: code style changes
refactor: refactor code
test: add/update tests
chore: maintenance tasks
```

Example:
```bash
git commit -m "feat: add product filter to products page"
```

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions:

1. Check existing [Issues](https://github.com/midega-g/e-commerce-demo/issues)
2. Open a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior

## Maintainers

- midega-g

---

**Happy coding!** 🚀