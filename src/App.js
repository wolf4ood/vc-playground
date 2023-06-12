import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { useState } from "react";
import {Ed25519Signature2020} from '@digitalbazaar/ed25519-signature-2020';
import {contexts} from "./context";

const vc = require('@digitalbazaar/vc');
const {defaultDocumentLoader} = vc;
const {extendContextLoader} = require('jsonld-signatures');

const documentLoader = extendContextLoader(async url => {

  console.log(url);
  if(contexts[url]!= null) {
    return {
      contextUrl: null,
      documentUrl: url,
      document: contexts[url]
    }
  }
  return defaultDocumentLoader(url);
});


function App() {
  const [text, setText] = useState("");

  const onChange = (changes) => {
    setText(changes);
  };
  const onClick = async (changes) => {

    const suite = new Ed25519Signature2020();

    const result = await vc.verifyCredential({
      credential: JSON.parse(text),
      suite,
      documentLoader,
    });

    console.log(result);
  };
  return (
    <div className="App">
      <div className="h-screen">
        <div className="navbar shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            VC Playground
          </a>
        </div>

        <div className="container mx-auto h-full">
          <div className="flex flex-col h-full">
            <div className="flex flex-col w-3/4 mx-auto pt-5 h-3/4">
              <CodeMirror
                value={text}
                className="h-full"
                extensions={[json()]}
                theme={okaidia}
                onChange={onChange}
              />
            </div>
            <div className="flex w-3/4 mx-auto">
              <button onClick={onClick} className="btn btn-primary">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
