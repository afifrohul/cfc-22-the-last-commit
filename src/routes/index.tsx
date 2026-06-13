import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/components/layout/app-layout"

import Home from "@/pages/home"
import Journey from "@/pages/journey"
import Capstone from "@/pages/capstone"
import TimeCapsule from "@/pages/time-capsule"
import FunFact from "@/pages/fun-fact"
import FinalMessage from "@/pages/final-message"
import Contributors from "@/pages/contributors"

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contributors",
        element: <Contributors />,
      },
      {
        path: "/journey",
        element: <Journey />,
      },
      {
        path: "/capstone",
        element: <Capstone />,
      },
      {
        path: "/time-capsule",
        element: <TimeCapsule />,
      },
      {
        path: "/fun-fact",
        element: <FunFact />,
      },
      {
        path: "/final-message",
        element: <FinalMessage />,
      },
    ],
  },
])
