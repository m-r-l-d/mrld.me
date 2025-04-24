import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link, useLocation } from "react-router";
import "./layout.css";
import { useState, useRef } from "react";
import { AboutDialog, ContactDialog } from "./dialogs";

function Layout() {
  // workaround for active link status on parent element
  const { pathname } = useLocation();
  // refs to leverage html dialog functions
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  // force rerender for inactive title bar
  const [inactive, setInactive] = useState(false);

  return (
    <>
      <AboutDialog ref={aboutRef} setInactive={setInactive} />
      <ContactDialog ref={contactRef} setInactive={setInactive} />
      <div className="window main-window">
        <Header
          aboutRef={aboutRef}
          inactive={inactive}
          setInactive={setInactive}
        />
        <div className="window-body">
          <menu role="tablist">
            <li role="tab" aria-selected={pathname === "/"}>
              <Link to="/">Home</Link>
            </li>
            <li role="tab" aria-selected={pathname.startsWith("/art")}>
              <Link to="art">Art</Link>
            </li>
            <li role="tab" aria-selected={pathname.startsWith("/microscopy")}>
              <Link to="microscopy">Microscopy</Link>
            </li>
            <li role="tab" aria-selected={pathname.startsWith("/lapidary")}>
              <Link to="lapidary">Lapidary</Link>
            </li>
            <li role="tab" aria-selected={pathname.startsWith("/tools")}>
              <Link to="tools">Tools</Link>
            </li>
          </menu>
          <div className="window" role="tabpanel">
            <main className="window-body">
              <Outlet context={{ setInactive: setInactive }} />
            </main>
          </div>
        </div>
        <Footer
          aboutRef={aboutRef}
          contactRef={contactRef}
          setInactive={setInactive}
        />
      </div>
    </>
  );
}

export default Layout;
