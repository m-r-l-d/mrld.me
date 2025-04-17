import construction from "../assets/img/construction.svg";

function Gallery() {
  return (
    <>
      <h2>Gallery</h2>
      <img
        src={construction}
        className="construction"
        alt="under construction"
        style={{ height: "50%", margin: "auto" }}
      />
    </>
  );
}

export default Gallery;
