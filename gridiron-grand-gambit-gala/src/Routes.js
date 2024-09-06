import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Standings from "./pages/Standings";
import DraftHistory from "./pages/DraftHistory";

const ProjectRoutes = () => {
    let element = useRoutes([
      { path: "/", element: <Home /> },
      { path: "standings", element: <Standings /> },
      { path: "drafthistory", element: <DraftHistory /> },
    ]);
  
    return element;
  };
  
  export default ProjectRoutes;