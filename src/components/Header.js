import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {props.name}
        </Link>
        <Link to="/verifier" className="btn btn-ghost btn-sm rounded-btn">
          Verifier
        </Link>
        <Link to="/contexts" className="btn btn-ghost btn-sm rounded-btn">
          Contexts
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
          About
        </Link>
      </div>
    </div>
  );
};
