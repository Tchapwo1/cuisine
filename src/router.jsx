import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import MapPage from "./routes/MapPage";
import DossierPage from "./routes/DossierPage";
import { GuidesPage, JournalPage, ArchivePage, NotFoundPage } from "./pages/stubs";
import { getVenueById } from "./data/registry";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "dossier/:venueId",
        element: <DossierPage />,
        loader: async ({ params }) => {
          const venue = getVenueById(params.venueId);
          if (!venue) {
            throw new Response("Not Found", { status: 404 });
          }
          return venue;
        },
      },
      {
        path: "guides",
        element: <GuidesPage />,
      },
      {
        path: "journal",
        element: <JournalPage />,
      },
      {
        path: "archive",
        element: <ArchivePage />,
      },
    ],
  },
]);
