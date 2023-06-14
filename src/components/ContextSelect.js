import { useState } from "react";
import { Add, Edit } from "./Icons";

export const ContextSelect = ({ items, selected, onChange, onAdd, onSwap }) => {
  let options = items.map((item) => <option key={item}>{item}</option>);

  if (items.length > 0 && selected == null) {
    selected = items[0];
  }

  const [isOpened, setIsOpened] = useState(false);
  const [current, setCurrent] = useState(selected);

  const onSelect = (item) => {
    setCurrent(item.target.value);
    onChange(item.target.value);
  };

  const addNewContext = () => {
    setCurrent("new_context");
    onAdd({ key: "new_context", value: {} });
  };

  const dropDownClass =
    "dropdown dropdown-top dropdown-end" + (isOpened ? "dropdown-open" : "");

  return (
    <div className="flex flex-row">
      <select
        className="select select-info select-sm w-full max-w-xs"
        onChange={onSelect}
        value={selected}
      >
        {options}
      </select>

      <div className={dropDownClass}>
        <button className="btn btn-circle btn-sm btn-outline ml-2">
          <Edit />
        </button>
        <div className="dropdown-content card card-compact w-96 p-2 shadow bg-base-100 text-primary-content rounded-none mb-2">
          <div className="card-body">
            <input
              type="text"
              placeholder="Type here"
              value={current}
              onChange={(evt) => setCurrent(evt.target.value)}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onSwap({ prev: selected, next: current })}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-circle btn-sm btn-outline ml-2"
        onClick={addNewContext}
      >
        <Add />
      </button>
    </div>
  );
};
