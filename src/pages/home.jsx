import { Link } from "react-router";

function Home() {
  return (
    <div className="block w-full md:flex">
      <div className="grid bg-[url('./assets/img/home/123.png')] w-screen h-[100vw] bg-cover bg-center bg-no-repeat md:w-[50vw] md:h-screen-minus-header">
        <h1 className="mx-auto mt-auto text-white text-4xl">Welcome!</h1>
        <h2 className="font-mono mx-auto text-white text-l">
          This is the place I keep all my stuff.
        </h2>
      </div>
      <div className="w-full md:w-[50%]">
        <Link
          to="/gallery"
          className="home-link bg-[url('./assets/img/home/gallery.png')]"
        >
          <h1 className="my-auto ml-10 text-white text-4xl">Gallery</h1>
        </Link>
        <Link
          to="/tools"
          className="home-link bg-[url('./assets/img/home/tools.png')]"
        >
          <h1 className="my-auto ml-10 text-white text-4xl">Tools</h1>
        </Link>
        <Link
          to="/about"
          className="home-link bg-[url('./assets/img/home/about.png')]"
        >
          <h1 className="my-auto ml-10 text-white text-4xl">About</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
