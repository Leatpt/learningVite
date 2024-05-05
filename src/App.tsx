import { BrowserRouter, Routes, Route } from "react-router-dom";
import avaleht from "./pages/avaleht";
import kontakt from "./pages/kontakt";
import meist from "./pages/meist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={avaleht()} />
          <Route path="/kontakt" element={kontakt()} />
          <Route path="/meist" element={meist()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
