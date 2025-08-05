import { Link, useOutletContext } from "react-router";
// import construction from "../assets/img/construction.svg";
import { useRef, useState } from "react";
import { GalleryDialog } from "../components/dialogs";
import "./pages.css";
import { pageData, treeData } from "../data/art";

function TreeLink({ topic, link, subtopics }) {
  return (
    <li key={topic}>
      <Link to={link}>{topic}</Link>
      {subtopics?.length > 0 && (
        <ul>{subtopics.map((innerTopic) => TreeLink(innerTopic))}</ul>
      )}
    </li>
  );
}

function Art() {
  const [currentImage, setCurrentImage] = useState(pageData["datamosh"]["gallery"][0]);
  const { setInactive } = useOutletContext();
  const ref = useRef(null);

  const currentPageData = pageData[window.location.pathname.split("/").at(-1)];
  const galleryLength = currentPageData.gallery?.length

  const dialogProps = {
    ref,
    setInactive,
    currentImage,
    setCurrentImage,
    galleryLength
  };

  return (
    <>
      <GalleryDialog {...dialogProps} />
      <div className="column-container">
        <div className="digital-art-left">
          <ul className="tree-view">
            {treeData.map((topic) => TreeLink(topic))}
          </ul>
        </div>
        <div className="column-right">
          <div className="title-box">
            <div className="title-box-title">{currentPageData.title}</div>
            <p>{currentPageData.description}</p>
          </div>
          <div className="sunken-panel gallery-container">
            {currentPageData.links?.map((item) => (
              <>
                <Link to={item.link}>
                  <p>{item.title}</p>
                </Link>
              </>
            ))}
            {currentPageData.gallery?.map((item) => (
              <img
                className="gallery-thumbnail"
                src={item.thumbnail}
                width={100}
                height={100}
                // key={item.title}
                onClick={() => {
                  setCurrentImage(item)
                  ref.current.showModal();
                  setInactive(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Art;
