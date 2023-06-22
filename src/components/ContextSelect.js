import { useState } from "react";
import { Add, Edit, Remove } from "./Icons";
import { ContextAddDialog } from "./dialog/ContextAddDialog";

export const ContextSelect = ({
  items,
  selected,
  onChange,
  onAdd,
  onSwap,
  onRemove,
}) => {
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

      <ContextAddDialog
        onClose={onClose}
        isOpened={isOpened}
        value={currentEditing.value}
        onSave={addNewContext}
        onChange={(value) =>
          setCurrentEditing({ isNew: currentEditing.isNew, value: value })
        }
      ></ContextAddDialog>

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
