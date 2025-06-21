import { Routes, Route } from "react-router";
import Layout from "@/pages/Layout";
import { getPathMapping } from "./utils";
import { useEffect } from "react";

function App() {
  const pathMapping = getPathMapping();
  const currentPath = location.pathname

  const title = currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);


  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.entries(pathMapping).map(
          ([path, { component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ),
        )}
      </Route>
    </Routes >
  )
}

export default App
