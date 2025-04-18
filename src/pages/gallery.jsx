import { useOutletContext } from "react-router";
// import construction from "../assets/img/construction.svg";
import { useRef, useState } from "react";
import { GalleryDialog } from "../components/dialogs";
import "./pages.css";

function Gallery() {
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
      <div className="home-container">
        <aside>
          <ul className="tree-view">
            <li>Traditional Art</li>
            <ul>
              <li>School projects</li>
              <li>Portraits</li>
            </ul>
          </ul>
        </aside>
        <div className="home-right">
          <h2>Gallery</h2>
          <p>Testing out an interface for viewing groups of photos.</p>
          <p>Open the image viewer using the button below:</p>
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
    </>
  );
}

export default Gallery;
