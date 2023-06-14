import { useState } from "react";
import { Editor } from "./Editor";
import { ContextSelect } from "../ContextSelect";
import { parse } from "../../validator/parse";

export const ContextEditor = (props) => {
  let items = Object.keys(props.value);
  let initial = {};
  let selected = null;

  if (items.length > 0) {
    initial = props.value[items[0]];
    selected = items[0];
  }

  const [contexts, setContexts] = useState(props.value);

  const [currentCtx, setCurrentCtx] = useState(initial);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const jsonParser = parse.bind(this, (ex) => {});

  let value = JSON.stringify(currentCtx, null, 2);

  const onValueChange = (val) => {
    let newVal = jsonParser(val);
    if (newVal != null) {
      let newCtx = {};
      newCtx[currentSelected] = newVal;
      let c = Object.assign(contexts, newCtx);
      setContexts(c);
      props.onChange(c);
    }
  };

  const pretty = () => {
    setCurrentCtx(Object.assign({}, currentCtx));
  };

  const onContextChange = (item) => {
    setCurrentSelected(item);
    setCurrentCtx(contexts[item]);
  };

  const onAdd = ({ key, value }) => {
    let newCtx = {};
    newCtx[key] = value;
    setContexts(Object.assign(contexts, newCtx));
    setCurrentCtx(value);
    setCurrentSelected(key);
  };

  const onSwap = ({ prev, next }) => {
    let val = contexts[prev];
    delete contexts[prev];
    let newCtx = {};
    newCtx[next] = val;
    setContexts(Object.assign(contexts, newCtx));
    setCurrentCtx(val);
    setCurrentSelected(next);
  };

  return (
    <div className={props.className}>
      <Editor value={value} className="h-full" onChange={onValueChange} />

      <div className="flex flex-row mx-auto pt-5 justify-between">
        <ContextSelect
          items={items}
          onChange={onContextChange}
          onAdd={onAdd}
          selected={currentSelected}
          onSwap={onSwap}
        />
        <div className="flex justify-end">
          <div>
            <button className="btn btn-primary btn-sm" onClick={pretty}>
              Pretty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
