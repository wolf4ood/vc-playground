import "./App.css";
import { Header } from "./components/Header";
import { Verifier } from "./pages/Verifier";

function App() {
  return (
    <div className="App">
      <Header name="VC Playground" />
      <div className="h-90vh">
        <Verifier />
      </div>
    </div>
  );
}

export default App;
