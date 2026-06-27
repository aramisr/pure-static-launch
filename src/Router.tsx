import { Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
