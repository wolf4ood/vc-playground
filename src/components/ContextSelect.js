import { useState } from "react";

export const ContextSelect = ({ items, onChange }) => {
  let options = items.map((item) => <option key={item}>{item}</option>);

  let currentItem = null;

  if (items.length > 0) {
    currentItem = items[0];
  }

  const [isOpened, setIsOpened] = useState(false);
  const [current, setCurrent] = useState(currentItem);

  const onSelect = (item) => {
    setCurrent(item.target.value);
    onChange(item);
  };

  const dropDownClass =
    "dropdown dropdown-top dropdown-end" + (isOpened ? "dropdown-open" : "");

  return (
    <div className="flex flex-row">
      <select
        className="select select-info select-sm w-full max-w-xs"
        onChange={onSelect}
      >
        {options}
      </select>

      <div className={dropDownClass}>
        <button className="btn btn-circle btn-sm btn-outline ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="dropdown-content card card-compact w-96 p-2 shadow bg-base-100 text-primary-content rounded-none mb-2">
          <div className="card-body">
            <input
              type="text"
              placeholder="Type here"
              value={current}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">Save</button>
            </div>
          </div>
        </div>

        <button className="btn btn-circle btn-sm btn-outline ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
