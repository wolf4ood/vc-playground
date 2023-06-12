export const Header = (props) => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        {props.name}
      </a>
    </div>
  );
};
