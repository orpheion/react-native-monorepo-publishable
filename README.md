# @org/root

This repository is a streamlined monorepo managed with **Lerna**, designed to facilitate efficient code sharing and management across multiple projects within the `@org` organization.

## Overview

The monorepo structure centralizes shared components, utilities, and resources, promoting consistency and code reuse across our applications. It simplifies dependency management and streamlines development workflows, ensuring scalable and maintainable projects.

## Repository Structure

The repository is organized into the following directories:

- **`apps/`**: Contains individual applications.
- **`packages/`**: Hosts reusable packages shared across applications.
- **`package.json`**: Root `package.json` file for managing shared dependencies and scripts.
- **`lerna.json`**: Configuration file for **Lerna**.

## Prerequisites

Ensure you have the following installed before working with this repository:

- **Node.js**: Version 18 or higher (as specified in the `engines` field of `package.json`). Use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node.js versions if needed.
- **Yarn**: Version 3.6.4 (as specified in the `packageManager` field of `package.json`).

  Follow the [official Yarn installation guide](https://yarnpkg.com/getting-started/install).

## Getting Started

Follow these steps to set up the repository:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:orpheion/react-native-monorepo.git
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

   This will install all dependencies for the root project and all packages within the monorepo.

## Scripts

The following scripts are available at the root level for managing the repository:

- **`clean`**: Removes all `node_modules` and other generated files across the repository.

  ```bash
  yarn clean
  ```

## Development Workflow

To develop within a specific package or application:

1. Navigate to the desired directory:

   ```bash
   cd packages/<package-name>
   # or
   cd apps/<app-name>
   ```

2. Use the appropriate commands for development, such as building or testing.

3. For running scripts across all packages or apps, use **Lerna** commands or define custom scripts in the root `package.json`.

## Additional Notes

- **Monorepo Management:** The repository uses **Lerna** to efficiently handle dependencies and versioning. Refer to the [Lerna documentation](https://lerna.js.org/) for advanced usage.

- **Code Consistency:** Ensure that shared components and utilities follow the organization’s coding standards and best practices.

- **Collaboration:** Follow Git workflow conventions (e.g., feature branches, pull requests) to maintain a clean and stable main branch.

## Resources

- [Node.js Official Website](https://nodejs.org/)
- [Yarn Documentation](https://yarnpkg.com/)
- [Lerna Documentation](https://lerna.js.org/)
