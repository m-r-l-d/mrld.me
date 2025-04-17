import Header from "./Header";
import Footer from "./Footer"
import { Outlet, Link, useLocation } from "react-router";
import "./layout.css"

function Layout() {
  // workaround for active link status on parent element
  const {pathname} = useLocation();
  
  console.log(location);

  return (
    <div className="window main-window">
      <Header />
      <div className="window-body">
        <menu role="tablist">
          <li role="tab" aria-selected={pathname === '/'}>
            <Link to="/">Home</Link>
          </li>
          <li role="tab" aria-selected={pathname === '/gallery'}>
            <Link to="gallery">Gallery</Link>
          </li>
          <li role="tab" aria-selected={pathname === '/tools'}>
            <Link to="tools">Tools</Link>
          </li>
        </menu>
        <div className="window" role="tabpanel">
          <main className="window-body">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
