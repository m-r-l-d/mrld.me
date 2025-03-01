import construction from "../assets/img/construction.svg";

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>You went somewhere you weren't supposed to! VERY BAD!</p>
      <img
        src={construction}
        className="construction"
        alt="under construction"
      />
    </>
  );
}

export default NotFound;
