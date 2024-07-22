import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

const ProjectRoutes = () => {
    let element = useRoutes([
      { path: "/", element: <Home /> },
    ]);
  
    return element;
  };
  
  export default ProjectRoutes;