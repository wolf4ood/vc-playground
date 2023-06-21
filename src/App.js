import "./App.css";
import { useState, useEffect } from "react";
import { CredentialEditor } from "./components/editor/Credential";
import { ContextEditor } from "./components/editor/Context";
import { Result } from "./components/alerts/Result";
import { Header } from "./components/Header";
import * as ctx from "./validator/context";

function App() {
  let storedContext = localStorage.getItem("playgroundCtx");

  let initialCtx;
  if (storedContext != null) {
    initialCtx = JSON.parse(storedContext);
  } else {
    initialCtx = Object.assign({}, ctx.contexts);
  }
  const [contexts, setContexts] = useState(initialCtx);
  const [currentTab, setCurrentTab] = useState("credential");
  const [errors, setErrors] = useState({});

  const tabClassName = (tab) => {
    return tab === currentTab ? "tab tab-active" : "tab";
  };

  const editorsClass = "h-65vh";

  useEffect(() => {
    var ctx = JSON.stringify(contexts);
    localStorage.setItem("playgroundCtx", ctx);
  }, [contexts]);

  const onContextChange = (ctx) => {
    localStorage.setItem("playgroundCtx", JSON.stringify(ctx));
    setContexts(ctx);
  };

  return (
    <div className="App">
      <Header name="VC Playground" />
      <div className="h-90vh">
        <div className="container mx-auto h-full">
          <div className="flex flex-col w-3/4 mx-auto py-5 h-80vh">
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

            <div className="flex mx-auto w-full h-full pt-5">
              <CredentialEditor
                className={editorsClass}
                contexts={contexts}
                onError={setErrors}
                visible={currentTab === "credential"}
              />

              <ContextEditor
                value={contexts}
                className={editorsClass}
                onChange={onContextChange}
                visible={currentTab === "context"}
              />
            </div>
          </div>
          <div className="flex flex-row w-3/4 mx-auto mt-10 justify-center">
            <Result onClose={() => setErrors({})} result={errors} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
