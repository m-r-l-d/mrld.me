import "./footer.css";

function Footer({ aboutRef, contactRef, setInactive }) {
  return (
    <div className="button-wrapper">
      <button
        onClick={() => {
          setInactive(true);
          aboutRef.current.showModal();
        }}
      >
        About
      </button>
      <button
        className="default"
        onClick={() => {
          setInactive(true);
          contactRef.current.showModal();
        }}
      >
        Contact
      </button>
    </div>
  );
}

export default Footer;
