import { CustomDialog } from "./CustomDialog";

export const ContextAddDialog = ({
  onClose,
  isOpened,
  onChange,
  onSave,
  value,
}) => {
  return (
    <CustomDialog onClose={onClose} isOpened={isOpened}>
      <h3 className="font-bold text-lg mx-auto">Add or Edit document link</h3>
      <div className="flex justify-center">
        <input
          onChange={(evt) => onChange(evt.target.value)}
          type="text"
          value={value}
          placeholder="Document link here"
          className="input input-bordered input-primary w-full mt-2"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={onSave} className="mt-2 btn btn-sm btn-primary">
          Save
        </button>
      </div>
    </CustomDialog>
  );
};
