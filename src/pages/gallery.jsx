import construction from "../assets/construction.svg";

function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <img
        src={construction}
        className="construction"
        alt="under construction"
      />
    </>
  );
}

export default Gallery;
