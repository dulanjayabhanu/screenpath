<div align="center">
    <img src="/docs/images/screenpath-main-poster.webp" alt"ScreenPath main poster" />
</div>

<br>

<div align="center">
    <a href="https://screenpath.vercel.app" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Live_Demo-Open_App-0a0a0a?style=for-the-badge&logo=vercel&logoColor=fafafa&labelColor=171717&color=737373" alt="ScreenPath live demo button" />
    </a>
</div>

# ScreenPath
### Your calm path to the perfect movie

<br>
    
ScreenPath is a focused movie discovery platform designed to help users find films quickly without the distractions that commonly appear in modern entertainment browsing platforms.

The application provides a clean and minimal interface that allows users to search, filter, and explore movies while maintaining clarity and simplicity. By reducing visual noise and unnecessary interface elements, ScreenPath aims to make the movie discovery process efficient and comfortable.

ScreenPath integrates with the TMDB API to retrieve movie data and presents it through a structured and distraction-free browsing experience.

<br>

<div align="center">
    <img src="/docs/images/screenpath-feature-card.webp" alt"ScreenPath feature card" />
</div>

<br>

## The Problem

Modern movie discovery platforms often prioritize engagement over usability. Many popular applications introduce numerous interface elements that compete for attention, including:

* autoplay trailers
* excessive recommendations
* promotional banners
* visually overwhelming layouts
* algorithm-driven distractions

While these features aim to increase user engagement, they frequently produce the opposite effect for users who simply want to find a movie quickly.

Common issues users experience include:

#### 1. Time Consumption
Users spend a significant amount of time navigating through irrelevant content before discovering something meaningful.

#### 2. Information Overload
Large quantities of visual content, animations, and promotional sections create cognitive overload.

#### 3. Fragmented Discovery
Movie information is often distributed across multiple pages, requiring users to navigate extensively.

#### 4. Decision Fatigue
When presented with too many competing options, users may struggle to make a clear selection.

These challenges turn the simple task of finding a movie to watch into a time-consuming process.

<br>

## The ScreenPath Approach

ScreenPath takes a different approach to movie discovery by focusing on clarity, efficiency, and simplicity.

The platform is designed around the principle that users should be able to discover relevant movies quickly without navigating unnecessary distractions.

Key design principles include:

#### 1. Minimal Visual Noise
The interface uses a restrained black-and-white design language that minimizes unnecessary visual stimulation.

#### 2. Focused Content Presentation
Only essential movie information is presented, ensuring users can quickly understand the content.

#### 3. Efficient Filtering
Users can refine movie searches using structured filters that allow precise discovery.

#### 4. Reduced Cognitive Load
Clear layouts and simplified navigation reduce the mental effort required to browse content.

The goal is not to maximize engagement metrics but to provide a calm and efficient browsing experience.

<br>

## Purpose and Goals

ScreenPath is built with several key objectives.

#### 1. Save User Time
The interface prioritizes quick discovery and efficient filtering to reduce browsing time.

#### 2. Promote Calm Browsing
By removing unnecessary distractions, the application creates a browsing experience that feels more focused and less overwhelming.

#### 3. Improve Decision Clarity
Structured filtering and simplified layouts help users make decisions more easily.

#### 4. Encourage Intentional Discovery
Instead of overwhelming users with algorithm-driven content, ScreenPath allows users to actively explore movies based on their preferences.

<br>

## Features

### 1. Movie Search

Users can search for movies by title using data provided by the TMDB API.

Search results are presented in a clear grid layout that prioritizes readability and quick scanning.

### 2. Advanced Filtering

ScreenPath provides several filtering options that allow users to narrow down results effectively.

Available filters include:

* release year
* genre
* sorting by (popularity, ratings, and release date)
* streaming provider
* language
* age certification

These filters allow users to discover movies that match specific preferences without browsing through irrelevant results.

### 3. Movie Details

Each movie includes a dedicated detail page containing essential information such as:

* movie title
* tagline
* overview
* poster artwork
* release date
* ratings
* runtime
* spoken languages
* age certifications
* related genres and keywords
* director and writer details
* top cast and crew details
* budget and revenue
* production companies
* official trailers
* recommendations

The layout focuses on presenting this information in a clear and organized manner.

### 4. Actor Discovery

Users can search and explore actors through a dedicated interface.

Actor results are presented in a structured layout that highlights key information and allows quick navigation.

Each actor includes a detailed page with:

* profile image
* biography
* known works
* popularity and basic metadata

This feature allows users to explore filmography and discover content through people rather than only movies.

### 5. Director and Crew Discovery

ScreenPath also provides the ability to explore directors and crew members.

Users can search for crew members and access individual detail pages that include:

* profile information
* role and department
* known works and contributions

This enables deeper exploration of the creative individuals behind movies.

### 6. Embedded Trailer Playback

ScreenPath allows users to watch official movie trailers directly within the application interface.

Trailer videos are embedded using the YouTube player, enabling users to view trailers without leaving the platform or opening external websites.

### 7. Responsive Interface

ScreenPath is designed to function across multiple device sizes.

The interface adapts automatically to:

* desktop environments
* tablets
* mobile devices

Recent improvements include:

* optimized navigation with a dedicated mobile menu
* adaptive hero section layout based on screen size
* improved card layouts for better readability on small screens
* consistent spacing and alignment across components

These updates ensure the browsing experience remains clear and accessible regardless of device.

### 8. Guided Interaction

ScreenPath provides contextual guidance to help users discover available interactions.

Users can access quick navigation options through:

* right-click interaction on desktop devices
* press and hold interaction on touch devices

The guide adapts based on the device type and is positioned to ensure visibility without interrupting the browsing experience.

### 9. Focused User Experience

The application is designed around a distraction-free browsing concept.

Key interface behaviors include:

* highlighting one primary component at a time
* reducing unnecessary visual clutter
* using subtle interactive elements to guide attention

These design choices help users explore content more efficiently and make quicker viewing decisions.

### 10. Dark and Light Modes

The platform supports both dark and light themes.

These themes allow users to choose the visual style that best fits their viewing environment and accessibility preferences.

<br>

## Technology Stack

ScreenPath is built using modern frontend technologies.
|Description               |Technology                    | Logo                                                                       |
|--------------------------|------------------------------|:--------------------------------------------------------------------------:|
|Frontend Framework        |React                         |<img src="https://skills.syvixor.com/api/icons?perline=15&i=reactjs" />     |
|Build Tool                |Vite                          |<img src="https://skills.syvixor.com/api/icons?perline=15&i=vite" />        |
|Styling Framework         |Tailwind CSS                  |<img src="https://skills.syvixor.com/api/icons?perline=15&i=tailwindcss" /> |
|UI Components             |shadcn/ui                     |<img src="https://skills.syvixor.com/api/icons?perline=15&i=shadcnui" />    |
|Data Fetching and Caching |TanStack Query                |<img src="https://skills.syvixor.com/api/icons?perline=15&i=reactquery" />  |
|Runtime Validation        |Zod                           |<img src="https://skills.syvixor.com/api/icons?perline=15&i=zod" />         |
|Routing                   |React Router                  |<img src="https://skills.syvixor.com/api/icons?perline=15&i=reactrouter" /> |
|External Data Source      |The Movie Database (TMDB) API |<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" width=40 /> |

<br>

## Project Structure

The application follows a modular component-based structure.

| Directory       | Description                                                                                                                                                                                       |
|-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`src/`           | Contains the main application source code.                                                                                                                                                        |
|`components/`    | Reusable UI components used across the application.                                                                                                                                               |
|`pages/`         | Route-level page components responsible for rendering complete views.                                                                                                                             |
|`layout/`        | Layout-level components responsible for global UI behaviors. <br>Includes the root layout that manages shared logic such as scroll position reset and nested routing via React Router's <Outlet>. |
|`hooks/`         | Custom React hooks that encapsulate reusable logic.                                                                                                                                               |
|`services/`      | Modules responsible for interacting with external APIs and handling network requests.                                                                                                             |
|`query-options/` | Centralized definitions for TanStack Query configuration including query keys, query functions, and query option objects.                                                                         |
|`constants/`     | Default values and configuration constants used throughout the application.                                                                                                                       |
|`types/`         | Type definitions used across the application to ensure consistent data structures and improve maintainability.                                                                                    |
|`utils/`         | Utility functions and helper modules used in multiple parts of the application.                                                                                                                   |
|`assets/`        | Static assets such as images, icons, and logos.                                                                                                                                                   |

This structure separates responsibilities and improves maintainability.

<br>

## Environment Configuration

Environment variables are used to manage API configuration and application settings.

A template file is included: `.env.example`

Developers should create a local environment file before running the application.

```
cp .env.example .env
```

The `.env` file must contain the necessary API configuration values including the TMDB API authorization key.

<br>

## Installation

Clone the repository:

```
git clone https://github.com/dulanjayabhanu/screenpath.git
```

Navigate to the project directory:

```
cd screenpath
```

Install dependencies:

```
npm install
```

Create the environment configuration:

```
cp .env.example .env
```

Update the `.env` file with the appropriate values.

Start the development server:

```
npm run dev
```

The application will run at: `http://localhost:5173`

<br>

## Production Build

To generate a production build:

```
npm run build
```

Preview the build locally:

```
npm run preview
```

The optimized production output is generated in the `dist` directory.

<br>

## Deployment

ScreenPath can be deployed using modern static hosting platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

Deployment typically involves building the application and hosting the generated `dist` directory.

<br>

## Legal Notice

This product uses the TMDB API but is not endorsed or certified by TMDB.

All movie data and media content are provided by [The Movie Database](https://www.themoviedb.org/).

<br>

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for complete license details.

<br>

<hr>

<div align="center">
    <img src="/docs/images/screenpath-logo.svg" alt="ScreenPath logo" width=150px />
    <h3>ScreenPath</h3>
</div>
