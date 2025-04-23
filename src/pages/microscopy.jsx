import "./pages.css";
import construction from "../assets/img/construction.svg";

function Microscopy() {

  return (
    <>
      <h3>Microscopy</h3>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default Microscopy;