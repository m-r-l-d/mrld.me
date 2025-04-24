import { Link, useOutletContext } from "react-router";
// import construction from "../assets/img/construction.svg";
import { useRef, useState } from "react";
import { GalleryDialog } from "../components/dialogs";
import "./pages.css";
import { pageData } from "../data/art";

function Art() {
  const [currentImage, setCurrentImage] = useState(
    "/src/assets/img/construction.svg"
  );
  const { setInactive } = useOutletContext();
  const ref = useRef(null);

  const dialogProps = {
    ref,
    setInactive,
    imagePath: currentImage,
    setCurrentImage,
  };

  return (
    <>
      <GalleryDialog {...dialogProps} />
      <div className="column-container">
        <div className="digital-art-left">
          <ul className="tree-view">
            <li>
              <Link to="/art/digital-art">Digital Art</Link>
              <ul>
                <li>
                  <Link to="/art/digital-art/datamosh">Datamosh</Link>
                  <ul>
                    <li>
                      <Link to="/art/digital-art/datamosh/avidemux">
                        Avidemux
                      </Link>
                    </li>
                    <li>
                      <Link to="/art/digital-art/datamosh/audacity">
                        Audacity
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/art/digital-art/misc-generative-art">
                    Misc generative art
                  </Link>
                  <ul>
                    <li>
                      <Link to="/art/digital-art/misc-generative-art/friendlybot">
                        Friendlybot
                      </Link>
                    </li>
                    <li>
                      <Link to="/art/digital-art/misc-generative-art/pixelsorting">
                        Pixelsorting
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/art/digital-art/illustration">Illustration</Link>
                </li>
                <li>
                  <Link to="/art/digital-art/graphic-design">
                    Graphic design
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="column-right">
          <div className="title-box">
            <div className="title-box-title">Digital Art</div>
            <p>Testing out an interface for viewing groups of photos.</p>
            <p>Open the image viewer using the button below:</p>
          </div>
          <div className="sunken-panel gallery-container">
            <button
              onClick={() => {
                ref.current.showModal();
                setInactive(true);
              }}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Art;
