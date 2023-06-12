import { useState } from "react";
import { Editor } from "./Editor";
import {ContextSelect} from "../ContextSelect";

export const ContextEditor = (props) => {
  let items = Object.keys(props.value);
  let initial = {};

  if (items.length > 0) {
    initial = props.value[items[0]];
  }

  const [contexts, setContexts] = useState(props.value);

  const [currentCtx, setCurrentCtx] = useState(initial);

  let value = JSON.stringify(currentCtx, null, 2);

  const onChange = (val) => {
    console.log(val);
  };

  const onContextChange = (item) => {
    setCurrentCtx(contexts[item.target.value]);
  };

  return (
    <div className={props.className}>
      <Editor value={value} className="h-full" onChange={onChange} />

      <div className="flex flex-row mx-auto pt-5 justify-between">
        <ContextSelect items={items} onChange={onContextChange}/>
        <div className="flex justify-end">
          <div>
            <button className="btn btn-primary btn-sm">Pretty</button>
          </div>
        </div>
      </div>
    </div>
  );
};
