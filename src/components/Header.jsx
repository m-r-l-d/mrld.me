import { useState } from "react";
import { NavLink, Link } from "react-router";

function Header() {
  return (
    <div>
      <div className="title-bar">
        <Link
          to="/"
          className="title-bar-text"
        >
          MRLD
        </Link>
        <div className="title-bar-controls">
          <button aria-label="Help" disabled></button>
          <button aria-label="Close" disabled></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
