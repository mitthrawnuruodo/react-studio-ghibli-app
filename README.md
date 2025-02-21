# Studio Ghibli films

## Initialize

```
npm install
```

## Run locally

```
npm run dev
```

## Project structure

```
react-studio-ghibli-app/
├── package.json           // Project metadata, dependencies, and scripts (uses Vite)
├── vite.config.js         // Vite configuration (plugins, server settings, CSS/PostCSS config)
├── tailwind.config.js     // Tailwind configuration file (custom themes, purge paths, etc.)
├── .gitignore             // Files and directories to ignore (node_modules, dist, env files, etc.)
├── index.html             // Main HTML file with the root div that bootstraps the React app
└── src/
    ├── main.jsx           // Entry point; renders the app inside a <BrowserRouter> and imports global CSS
    ├── main.css           // Global CSS file; imports Tailwind
    ├── App.jsx            // Sets up the app routes using React Router and includes the Layout
    ├── Layout.jsx         // Layout component that wraps pages with Header, Footer, and an Outlet for page content
    ├── components/        // Reusable UI components used across pages
    │   ├── Header.jsx     // Contains the responsive navigation menu and site title/logo
    │   ├── Footer.jsx     // Simple footer displayed on all pages
    │   └── FilmCard.jsx   // Reusable card component to display film summary info and link to details
    ├── hooks/             // Custom React hooks
    │   └── useAPI.js      // Custom hook for fetching API data using async/await
    ├── store/             // Zustand store for application state
    │   └── filmStore.js   // Manages film data and favourites (with persist middleware for localStorage)
    └── pages/             // Page components used for routing
        ├── Home.jsx       // Home page with a hero section and list of favourite films (or prompt to add some)
        ├── About.jsx      // Static page with Studio Ghibli history and API attribution info
        ├── Films.jsx      // Displays a grid of film cards (data fetched from API and stored in Zustand)
        ├── FilmDetails.jsx// Displays details for a selected film and includes an "Add to favourites" button
        ├── Favourites.jsx // Shows all favourite films (using the same FilmCard component)
        └── NotFound.jsx   // 404 page for any unmatched routes
```

## Published version

https://react-studio-ghibli-app.netlify.app/