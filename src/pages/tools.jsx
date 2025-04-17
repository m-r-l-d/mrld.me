import construction from "../assets/img/construction.svg";

function Tools() {
  return (
    <>
      <h2>Tools</h2>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default Tools;
