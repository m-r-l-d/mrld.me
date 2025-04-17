import Header from "./Header";
import {useState, useEffect} from "react";
import { Outlet, NavLink, useLocation } from "react-router";

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
            <a href="/">Home</a>
          </li>
          <li role="tab" aria-selected={pathname === '/gallery'}>
            <a href="gallery">Gallery</a>
          </li>
          <li role="tab" aria-selected={pathname === '/tools'}>
            <a href="tools">Tools</a>
          </li>
          <li role="tab" aria-selected={pathname === '/about'}>
            <a href="about">About</a>
          </li>
        </menu>
        <div className="window" role="tabpanel">
          <div className="window-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
