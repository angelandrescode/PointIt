import { Route, Routes } from "react-router";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>App</h1>} />
      <Route path="/about" element={<h1>Landing</h1>} />
      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
