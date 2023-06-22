import "./App.css";
import { Header } from "./components/Header";
import { Verifier } from "./pages/Verifier";
import { Contexts } from "./pages/Contexts";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header name="VC Playground" />
      <div className="h-80vh">
        <Routes>
          <Route path="/" element={<Verifier />} />
          <Route path="/verifier" element={<Verifier />} />
          <Route path="/contexts" element={<Contexts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
