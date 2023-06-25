import "./App.css";
import { Header } from "./components/Header";
import { Verifier } from "./pages/Verifier";
import { EditorContext } from "./components/editor/EditorContext";
import { Contexts } from "./pages/Contexts";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header name="VC Playground" />
      <div className="h-80vh">
        <Routes>
          <Route
            path="/"
            element={
              <EditorContext.Provider value={{ text, setText }}>
                <Verifier />
              </EditorContext.Provider>
            }
          />
          <Route
            path="/verifier"
            element={
              <EditorContext.Provider value={{ text, setText }}>
                <Verifier />
              </EditorContext.Provider>
            }
          />
          <Route path="/contexts" element={<Contexts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
