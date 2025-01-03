import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import List from "./pages/List";
import BasicLayout from "./layouts/BasicLayout";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout getStarted={true} />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route element={<BasicLayout getStarted={false} />}>
          <Route path="/list/:id" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
