import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
