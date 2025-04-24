import "./dialogs.css";

export default function GalleryDialog({ ref, setInactive, imagePath }) {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">View Image - mrld.me</div>
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
        <div className="sunken-panel">
          <img src={imagePath} alt="under construction" />
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
        <p className="status-bar-field">Maybe image description will go here?</p>
        <p className="status-bar-field">1 / 1</p>
        <p className="status-bar-field">Size: 100mb</p>
      </div>
    </dialog>
  );
}
