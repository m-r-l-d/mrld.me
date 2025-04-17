import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link, useLocation } from "react-router";
import "./layout.css";
import { useState, useRef } from "react";

const AboutDialog = ({ ref, setInactive }) => {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">mrld.me - About</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close"
            onClick={() => {
              setInactive(false);
              ref.current.close();
            }}
          ></button>
        </div>
      </div>
      <div className="window-body">
        <h3>About this site</h3>
        <p>
          I'm MRLD (pronounced like emerald, not Mr. LD) and this is my
          portfolio site. I'm a web developer with a lot of hobbies.
        </p>
        <p>I'm always trying to learn something new or make something cool!</p>
        <p>This website is still very much a work in progress!</p>
        <h4>Credits</h4>
        <p>
          Built using the <a href="https://jdan.github.io/98.css/">98.css</a>{" "}
          design system -- check out the project, it's awesome.
        </p>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setInactive(false);
            ref.current.close();
          }}
          className="default"
          autoFocus
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

const ContactDialog = ({ ref, setInactive }) => {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">mrld.me - Contact</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close"
            onClick={() => {
              setInactive(false);
              ref.current.close();
            }}
          ></button>
        </div>
      </div>
      <div className="window-body">
        <h3>Contact</h3>
        <p>emeraldbay53@gmail.com</p>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setInactive(false);
            ref.current.close();
          }}
          className="default"
          autoFocus
        >
          OK
        </button>
      </div>
    </dialog>
  );
};

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
            <li role="tab" aria-selected={pathname === "/gallery"}>
              <Link to="gallery">Gallery</Link>
            </li>
            <li role="tab" aria-selected={pathname === "/tools"}>
              <Link to="tools">Tools</Link>
            </li>
          </menu>
          <div className="window" role="tabpanel">
            <main className="window-body">
              <Outlet />
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
