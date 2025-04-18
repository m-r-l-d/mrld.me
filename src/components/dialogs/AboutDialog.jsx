import "./dialogs.css";

export default function AboutDialog({ ref, setInactive }) {
  return (
    <dialog ref={ref} className="window dialog">
      <div className="title-bar">
        <div className="title-bar-text">About - mrld.me</div>
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
        <p>
          View the source code here:{" "}
          <a href="https://github.com/m-r-l-d/mrld.me" target="_blank">
            github.com/m-r-l-d/mrld.me
          </a>
        </p>
        <h4>Credits</h4>
        <p>
          Built using the{" "}
          <a href="https://jdan.github.io/98.css/" target="_blank">
            98.css
          </a>{" "}
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
}
