import { useState } from "react";
import { Editor } from "./Editor";
import { validate } from "../../validator/validator";
import { parse } from "../../validator/parse";

export const CredentialEditor = (props) => {
  const [text, setText] = useState("");

  const jsonParser = parse.bind(this, (ex) => {
    props.onError({ verified: false, results: [{ error: ex }] });
  });


  let containerClass ="flex flex-col mx-auto w-full";
  if (!props.visible) {
    containerClass += " hidden";
  }

  const onClick = async (changes) => {
    const credential = jsonParser(text);
    if (credential != null) {
      const result = await validate(credential, props.contexts);

      props.onError(result);
    }
  };

  const pretty = () => {
    if (text !== "") {
      let parsed = jsonParser(text);
      if (parsed != null) {
        setText(JSON.stringify(parsed, null, 2));
      }
    }
  };
  return (
    <div className={containerClass}>
      <Editor value={text} className={props.className} onChange={setText} />
      <div className="flex flex-row pt-5 justify-end">
        <div className="flex justify-end">
          <div>
            <button
              disabled={text === ""}
              onClick={pretty}
              className="btn btn-primary btn-sm"
            >
              Pretty
            </button>
          </div>
          <div className="pl-2">
            <button
              disabled={text === ""}
              onClick={onClick}
              className="btn btn-primary btn-sm"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
