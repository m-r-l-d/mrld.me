import { useOutletContext } from "react-router";
// import construction from "../assets/img/construction.svg";
import { useRef, useState } from "react";
import { GalleryDialog } from "../components/dialogs";
import "./pages.css";

function DigitalArt() {
  const [currentImage, setCurrentImage] = useState(
    "/src/assets/img/construction.svg"
  );
  const { setInactive } = useOutletContext();
  const ref = useRef(null);

  <GalleryDialog ref={ref} setInactive={setInactive} />;

  const dialogProps = {
    ref,
    setInactive,
    imagePath: currentImage,
    setCurrentImage,
  };

  return (
    <>
      <GalleryDialog {...dialogProps} />
      <div className="panel-container">
        <div className="digital-art-left">
          <ul class="tree-view">
            <li>
              Digital Art
              <ul>
                <li>
                  Datamosh
                  <ul>
                    <li>Avidemux</li>
                    <li>Audacity</li>
                    <li>Pixelsorting</li>
                  </ul>
                </li>
                <li>
                  Misc generative art
                  <ul>
                    <li>Friendlybot</li>
                  </ul>
                </li>
                <li>Illustration</li>
                <li>Graphic design</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="home-right">
          <div className="title-box">
            <div className="title-box-title">Digital Art</div>
            <p>Testing out an interface for viewing groups of photos.</p>
            <p>Open the image viewer using the button below:</p>
          </div>
          <button
              onClick={() => {
                ref.current.showModal();
                setInactive(true);
              }}
            >
              Gallery
            </button>
          {/* <div className="sunken-panel gallery-panel">
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DigitalArt;
