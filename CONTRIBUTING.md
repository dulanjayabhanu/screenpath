# Contributing to ScreenPath

Thank you for your interest in contributing to ScreenPath. Contributions help improve the project and ensure the application continues to evolve with high quality and maintainability.

This document outlines the recommended workflow for reporting issues, proposing changes, and submitting contributions.

<br>

## Code of Conduct

All contributors are expected to follow the project's Code of Conduct.

Please read the following document before contributing: [Code Of Conduct](CODE_OF_CONDUCT.md)

Respectful and constructive collaboration is expected in all interactions within the community.

<br>

## Ways to Contribute

There are several ways to contribute to the project.

### 1. Reporting Bugs

If you encounter a bug, please open an issue using the [bug report template](.github/ISSUE_TEMPLATE/form.yml).

When submitting a bug report, include:

* a clear description of the issue
* steps required to reproduce the problem
* expected behavior
* actual behavior
* screenshots if applicable
* environment details such as browser and operating system

Providing detailed information helps maintainers diagnose and resolve issues more efficiently.

<br>

### 2. Suggesting Features

Feature suggestions are welcome. If you would like to propose an improvement or new feature:

1. Check the existing issues to ensure the suggestion has not already been discussed.
2. Create a new issue using the feature request template.
3. Clearly explain the motivation and potential benefits of the proposed change.

<br>

### 3. Improving Documentation

Documentation improvements are always valuable.

Examples include:

* correcting grammatical errors
* improving explanations
* adding screenshots or diagrams
* expanding technical documentation

<br>

## Development Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/dulanjayabhanu/screenpath.git
```

### 2. Navigate to the Project Directory

```bash
cd screenpath
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a local environment file based on the example template.

```bash
cp .env.example .env
```

Then update the `.env` file with the required configuration values.

### 5. Start the Development Server

```bash
npm run dev
```

The application will run locally at: `http://localhost:5173`

<br>

## Branching Strategy

When contributing changes, create a new branch from the main branch.

Example:

```bash
git checkout -b feature/improve-filter-ui
```

Branch naming recommendations:

* feature/feature-name
* fix/bug-description
* docs/documentation-update
* refactor/component-name

<br>

## Commit Message Guidelines

This repository follows the Conventional Commits specification.

Please structure commit messages using the following format:

```
type: short description
```

Common commit types include:

* `feat` : new feature
* `fix` : bug fix
* `docs` : documentation changes
* `refactor` : code restructuring without changing functionality
* `style` : formatting changes
* `ci` : continuous integration configuration
* `chore` : maintenance tasks

Example:

```
feat: add movie trailer playback component
```

<br>

## Submitting a Pull Request

Before submitting a pull request, ensure the following:

* the change has been tested locally
* documentation has been updated where necessary
* commits follow the Conventional Commits format
* the code follows the project's coding conventions

Then create a pull request using the repository's pull request template.

Provide a clear summary explaining:

* what changes were made
* why the change is necessary
* any relevant screenshots or examples

<br>

## Pull Request Review Process

After a pull request is submitted:

1. Maintainers will review the changes.
2. Feedback or requested changes may be provided.
3. Once the pull request meets project standards, it will be merged into the main branch.

<br>

## Questions

If you have questions regarding the contribution process, feel free to open an issue in the repository.

<br>

Thank you for helping improve ScreenPath.
