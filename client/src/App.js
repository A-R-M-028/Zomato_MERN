import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayoutHOC from "./HOC/HomeHOC";
import Temp from "./Components/temp";
import HomeLayout from "./Layout/HomeLayout";
import Master from "./Components/Master";

function App() {
  return (
    <>
      <Routes>
        {/* Use Route and HomeLayoutHOC components correctly */}
        <Route HomeLayoutHOC path="/" element={<HomeLayout><Temp /></HomeLayout>} />
        <Route HomeLayoutHOC path=":/type" element={<HomeLayout><Master /></HomeLayout>} />
      </Routes>
    </>
  );
}

export default App;
