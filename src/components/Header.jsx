import { Link } from "react-router";

function Header({ aboutRef, inactive, setInactive }) {
  return (
    <div>
      <div className={"title-bar " + (inactive ? "inactive" : "")}>
        <Link to="/" className="title-bar-text">
          mrld.me
        </Link>
        <div className="title-bar-controls">
          <button
            aria-label="Help"
            onClick={() => {
              aboutRef.current.showModal();
              setInactive(true);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
