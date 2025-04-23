import "./pages.css";
import construction from "../assets/img/construction.svg";

function TraditionalArt() {

  return (
    <>
      <h3>Traditional Art</h3>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default TraditionalArt;