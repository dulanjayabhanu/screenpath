# ScreenPath

**Your calm path to the perfect movie.**

ScreenPath is a distraction-free movie discovery web application that helps users search and explore movies in a clean and focused environment. The interface is designed with a minimal black-and-white design to reduce visual noise while browsing movies.

This project uses data provided by the TMDB API.

---

## Features

* Search movies by title
* Advanced filtering options (genre, year, language, etc.)
* Watch official movie trailers
* Distraction-free black and white UI
* Responsive design for different screen sizes
* Light and dark mode support
* Movie detail page with extended information
* Pagination support for browsing large collections

---

## Tech Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* shadcn/ui
* TanStack Query
* Zod
* use-debounce
* React Router

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/dulanjayabhanu/screenpath.git
```
```
cd screenpath
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup environment variables

Copy the example environment file:

```
cp .env.example .env
```

Then update the `.env` file with your TMDB API key.

---

### 4. Run the development server

```
npm run dev
```

The app will start at:
`http://localhost:5173`

---

## Build for Production

```
npm run build
```

Preview the production build:

```
npm run preview
```

---

## Data Source

This project uses movie data provided by **The Movie Database (TMDB)**.

This product uses the TMDB API but is not endorsed or certified by TMDB.

---

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more information.

