import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "@/pages/HomePage.tsx";
import MoviesPage from "@/pages/MoviesPage.tsx";
import RootLayout from "@/layouts/RootLayout.tsx";
import PrivacyPage from "@/pages/PrivacyPage.tsx";
import TermsPage from "@/pages/TermsPage.tsx";
import FileNotFoundPage from "@/pages/404Page.tsx";

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
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  </StrictMode>,
)
