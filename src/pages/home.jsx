import { Link } from "react-router";
import "./home.css";

function Home() {
  const LinkPanel = (props) => {
    const { title, to } = props;

    return (
      <div className="window">
        <div className="window-body">
          <Link to={to}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="home-left sunken-panel"></div>
      <div className="home-right">
        <h2>Welcome!</h2>
        <p>
          This is a place where you can check out some of my stuff. I do a lot
          of stuff!
        </p>
        <LinkPanel title="Gallery" to="/gallery"/>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div>
            <a href="/gallery" className="">Gallery</a>
          </div>
          <Link to="/tools" className="window">
            <h1 className="">Tools</h1>
          </Link>
          <Link to="/about" className="window">
            <h1 className="">About</h1>
          </Link>
        <div className="link-container">
          
        </div> */
}
