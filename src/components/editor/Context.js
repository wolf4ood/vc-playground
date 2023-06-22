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

  let initialValue = JSON.stringify(currentCtx, null, 2);

  const [rawValue, setRawValue] = useState(initialValue);
  const jsonParser = parse.bind(this, (ex) => {});

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
    let rValue = JSON.stringify(contexts[currentSelected], null, 2);
    setRawValue(rValue);
  };

  const onContextChange = (item) => {
    setCurrentSelected(item);
    setCurrentCtx(contexts[item]);
    let rValue = JSON.stringify(contexts[item], null, 2);
    setRawValue(rValue);
  };

  const onAdd = ({ key, value }) => {
    let newCtx = {};
    newCtx[key] = value;
    let c = Object.assign(contexts, newCtx);
    setContexts(c);
    setCurrentCtx(value);
    setCurrentSelected(key);
    props.onChange(c);
    let rValue = JSON.stringify(value, null, 2);
    setRawValue(rValue);
  };


  const onSwap = ({ prev, next }) => {
    let val = contexts[prev];
    delete contexts[prev];
    let newCtx = {};
    newCtx[next] = val;
    let c = Object.assign(contexts, newCtx);
    setContexts(c);
    setCurrentCtx(val);
    setCurrentSelected(next);
    props.onChange(c);
  };

  const onRemove = (item) => {

    let newCtx = Object.assign(contexts,{});
    delete newCtx[item];

    var newSelected = Object.keys(newCtx)[0];
    var newVal = newCtx[newSelected];
    setContexts(newCtx);
    setCurrentCtx(newVal);
    setCurrentSelected(newSelected);
    props.onChange(newCtx);
    let rValue = JSON.stringify(newVal, null, 2);
    setRawValue(rValue);
    props.onChange(newCtx);
  }

  const containerClass = "flex flex-col mx-auto w-full";

  return (
    <div className={containerClass}>
      <Editor
        value={rawValue}
        className={props.className}
        onChange={onValueChange}
      />

      <div className="flex flex-row mx-auto w-full pt-5 justify-between">
        <ContextSelect
          items={items}
          onChange={onContextChange}
          onAdd={onAdd}
          selected={currentSelected}
          onSwap={onSwap}
          onRemove={onRemove}
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
