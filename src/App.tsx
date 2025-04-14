import { Route, Routes } from "react-router-dom";

import TablePage from "@/pages/table";
import ListPage from "@/pages/list";
import IndexPage from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<ListPage />} path="/list" />
    </Routes>
  );
}

export default App;
