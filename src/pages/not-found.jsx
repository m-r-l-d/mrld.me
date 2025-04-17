import construction from "../assets/img/construction.svg";

function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>You went somewhere you weren't supposed to! VERY BAD!</p>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default NotFound;
