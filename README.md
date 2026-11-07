# Personal Project Showcase App

A responsive React app for a creative agency to show past work. Visitors can browse and search projects, and staff can add new ones through a form.

## The problem
Visitors need to find relevant work quickly. The agency needs to add new projects without a developer.

## Features
- List of projects with a coloured thumbnail, title and description
- Live search by title or description
- Add-project form with validation (title required, description of at least 20 characters)
- Projects saved in the browser, so they persist after a refresh
- Responsive layout built with Bootstrap, based on the provided mock-up
- Tests with Jest and React Testing Library

## Setup
Requires Node.js 18 or newer.

```bash
git clone [your repository URL]
cd project-showcase
npm install
npm run dev
```

Open the local address that the terminal prints.

## Usage
1. Type in the search box to filter the list.
2. Fill in Title and Description, pick a colour, and click **Add** to add a project. It appears at the top.

## Running tests
```bash
npm test
```

## Project structure
```
src/
  App.jsx                    holds the project list and search state
  components/
    ProjectForm.jsx          form for adding a project
    SearchBar.jsx            search input
    ProjectCard.jsx          one row in the list
  app.test.jsx               tests
```

## Known limitations
- Projects are stored in each visitor's own browser (localStorage), so they aren't shared between devices or visitors. A real deployment needs a backend or CMS.
- Projects can't be edited or deleted.
- Thumbnails are a colour and a letter. Images can't be uploaded.
- Bootstrap is loaded from a CDN, so styling needs an internet connection.

## Possible improvements
Edit and delete, image uploads, categories and a detail view, and a backend database.
