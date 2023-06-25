import "./App.css";
import { useState } from "react";
import { CredentialEditor } from "./components/editor/Credential";
import { ContextEditor } from "./components/editor/Context";
import { Result } from "./components/alerts/Result";
import { Header } from "./components/Header";
import * as ctx from "./validator/context";

function App() {
  const [contexts, setContexts] = useState(Object.assign({}, ctx.contexts));
  const [currentTab, setCurrentTab] = useState("credential");
  const [errors, setErrors] = useState({});

  const tabClassName = (tab) => {
    return tab === currentTab ? "tab tab-active" : "tab";
  };

  const editorClassName = (tab) => {
    return tab === currentTab ? "h-full" : "hidden";
  };

  return (
    <div className="App">
      <div className="h-screen">
        <Header name="VC Playground" />
        <div className="container mx-auto h-full">
          <div className="flex flex-col w-3/4 mx-auto py-5 h-3/4">
            <div className="flex justify-center">
              <div className="tabs tabs-boxed">
                <a
                  href="#credential"
                  className={tabClassName("credential")}
                  onClick={() => setCurrentTab("credential")}
                >
                  Credential
                </a>
                <a
                  href="#context"
                  className={tabClassName("context")}
                  onClick={() => setCurrentTab("context")}
                >
                  Additional context
                </a>
              </div>
            </div>

            <div className="h-full pt-5">
              <CredentialEditor
                className={editorClassName("credential")}
                contexts={contexts}
                onError={setErrors}
              />
              <ContextEditor
                value={contexts}
                className={editorClassName("context")}
                onChange={setContexts}
              />
            </div>
            <div className="flex flex-row w-3/4 mx-auto pt-5 justify-center">
              <Result result={errors} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
