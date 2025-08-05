import "./dialogs.css";

export default function GalleryDialog({
  ref,
  setInactive,
  currentImage,
  setCurrentImage,
  galleryLength,
}) {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">View Image - mrld.me</div>
        <div className="title-bar-controls">
          <button
            aria-label="Close"
            onClick={() => {
              setInactive(false);
              setCurrentImage(null);
              ref.current.close();
            }}
          ></button>
        </div>
      </div>
      <div className="window-body">
        <div
          className="sunken-panel"
          style={{ backgroundColor: "silver", display: "flex", minHeight: "60vh"}}
        >
          <img src={currentImage?.image || null} alt="under construction" />
        </div>
      </div>
      <div className="button-wrapper">
        {/* <button
          onClick={() => {
            setInactive(false);
            ref.current.close();
          }}
          className="default"
          autoFocus
        >
          OK
        </button> */}
      </div>
      <div className="status-bar">
        <p className="status-bar-field">{currentImage?.description || null}</p>
        <p className="status-bar-field">1 / {galleryLength}</p>
        <p className="status-bar-field">Size: 100mb</p>
      </div>
    </dialog>
  );
}
