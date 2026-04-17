import { Route, Routes } from "react-router";
import { Home } from "./sections/Home";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<h1>Landing</h1>} />
      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
