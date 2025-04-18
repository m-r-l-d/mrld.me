import "./dialogs.css";

export default function GalleryDialog({ ref, setInactive, imagePath }) {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">Image Viewer - mrld.me</div>
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
        <h3>Gallery</h3>
        <div className="sunken-panel">
          <img
            src={imagePath}
            alt="under construction"
            // style={{ minWidth: "calc(100vw - 40px)", maxWidth: "100%", margin: "auto" }}
          />
        </div>
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
}
