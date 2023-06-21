import { useState } from "react";
import { Add, Edit, Remove } from "./Icons";

export const ContextSelect = ({ items, selected, onChange, onAdd, onSwap, onRemove }) => {
  let options = items.map((item) => <option key={item}>{item}</option>);

  if (items.length > 0 && selected === null) {
    selected = items[0];
  }

  const newValue = { isNew: true, value: "" };
  let currentValue = newValue;

  if (selected) {
    currentValue = { isNew: false, value: selected };
  }

  const [currentEditing, setCurrentEditing] = useState(currentValue);
  const [isOpened, setIsOpened] = useState(false);

  const onSelect = (item) => {
    onChange(item.target.value);
  };

  const addNewContext = () => {
    if (currentEditing.isNew) {
      onAdd({ key: currentEditing.value, value: {} });
      setCurrentEditing(newValue);
    } else {
      onSwap({ prev: selected, next: currentEditing.value });
      setCurrentEditing(newValue);
    }
  };

  const onContextAdd = () => {
    setCurrentEditing(newValue);
    setIsOpened(true);
  };

  const onContextRemove = () => {
    setCurrentEditing(newValue);
    onRemove(selected);
  };

  const onContextEdit = () => {
    setCurrentEditing({ isNew: false, value: selected });
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return (
    <div className="flex flex-row">
      <select
        className="select select-info select-sm w-full max-w-xs"
        onChange={onSelect}
        value={selected}
      >
        {options}
      </select>

      <button
        onClick={() => onContextEdit()}
        className="btn btn-circle btn-sm btn-outline ml-2"
      >
        <Edit />
      </button>
      <dialog
        onCancel={onClose}
        onClose={onClose}
        open={isOpened}
        className="modal"
      >
        <form method="dialog" className="modal-box">
          <div className="flex flex-col">
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mx-auto">
              Add or Edit context link
            </h3>
            <div className="flex justify-center">
              <input
                onChange={(evt) =>
                  setCurrentEditing({
                    isNew: currentEditing.isNew,
                    value: evt.target.value,
                  })
                }
                type="text"
                value={currentEditing.value}
                placeholder="Context link here"
                className="input input-bordered input-primary w-full mt-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={addNewContext}
                className="mt-2 btn btn-sm btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button
        className="btn btn-circle btn-sm btn-outline ml-2"
        onClick={() => onContextAdd()}
      >
        <Add />
      </button>
      <button
        className="btn btn-circle btn-sm btn-outline ml-2"
        onClick={() => onContextRemove()}
      >
        <Remove />
      </button>
    </div>
  );
};
