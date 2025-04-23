import { Link } from "react-router";
import "./pages.css";

function Home() {
  const LinkPanel = (props) => {
    const { title, to } = props;

    return (
      <div className="window">
        <div className="window-body">
          <Link to={to}>
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="panel-container">
      <div className="home-left sunken-panel"></div>
      <div className="home-right">
        <h2>mrld.me</h2>
        <p>
          This is a place where you can check out some of my stuff. Click on the
          tabs at the top of the window or the links below to navigate between
          pages.
        </p>
        <p>This page is still heavily under construction!</p>
        <div className="link-container">
          <LinkPanel title="Traditional Art" to="/traditional-art" />
          <LinkPanel title="Digital Art" to="/digital-art" />
          <LinkPanel title="Microscopy" to="/microscopy" />
          <LinkPanel title="Lapidary" to="/lapidary" />
          <LinkPanel title="Tools" to="/tools" />
        </div>
      </div>
    </div>
  );
}

export default Home;
