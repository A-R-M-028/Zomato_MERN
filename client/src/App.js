import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayoutHOC from "./HOC/HomeHOC";
import Temp from "./Components/temp";
import HomeLayout from "./Layout/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Use Route and HomeLayoutHOC components correctly */}
        <Route HomeLayoutHOC path="/" element={<HomeLayout><Temp /></HomeLayout>} />
      </Routes>
    </>
  );
}

export default App;
