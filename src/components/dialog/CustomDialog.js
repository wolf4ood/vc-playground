export const CustomDialog = ({ onClose, isOpened, children }) => {
  return (
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
        </div>
        {children}
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
