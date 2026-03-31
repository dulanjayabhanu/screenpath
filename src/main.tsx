import {lazy, StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import ProgressSpinner from "@/components/ui/custom/ProgressSpinner.tsx";

const RootLayout = lazy(() => import("@/layouts/RootLayout"))
const HomePage = lazy(() => import("@/pages/HomePage"))
const MoviesPage = lazy(() => import("@/pages/MoviesPage"))
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"))
const TermsPage = lazy(() => import("@/pages/TermsPage"))
const FileNotFoundPage = lazy(() => import("@/pages/404Page"))
const ActorsPage = lazy(() => import("@/pages/ActorsPage"))
const ActorDetailsPage = lazy(() => import("@/pages/ActorDetailsPage"))
const DirectorsAndCrewPage = lazy(() => import("@/pages/DirectorsAndCrewPage"))
const DirectorAndCrewDetailsPage = lazy(() => import("@/pages/DirectorAndCrewDetailsPage"))

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <FileNotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/movies/:movieId",
                element: <MoviesPage />
            },
            {
                path: "/privacy",
                element: <PrivacyPage />
            },
            {
                path: "/terms",
                element: <TermsPage />
            },
            {
                path: "/actors",
                element: <ActorsPage />
            },
            {
                path: "/actor/:actorId",
                element: <ActorDetailsPage />
            },
            {
                path: "/crews",
                element: <DirectorsAndCrewPage />
            },
            {
                path: "/crew/:crewId",
                element: <DirectorAndCrewDetailsPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <Suspense fallback={
              <div className="fallback-wrapper">
                  <ProgressSpinner />
              </div>
          }>
              <RouterProvider router={router} />
          </Suspense>
          <Analytics />
          <SpeedInsights />
      </QueryClientProvider>
  </StrictMode>,
)
