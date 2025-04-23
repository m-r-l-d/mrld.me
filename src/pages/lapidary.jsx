import "./pages.css";
import construction from "../assets/img/construction.svg";

function Lapidary() {

  return (
    <>
      <h3>Lapidary</h3>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default Lapidary;
