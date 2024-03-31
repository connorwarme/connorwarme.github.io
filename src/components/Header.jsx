import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <div className="flex items-center">
      <div>
        <Link to={"/"} className="md:hidden">
          <h3 className="font-grenze text-3xl font-bold">CW</h3>
        </Link>
        <Link to={"/"} className="hidden md:block">
          <h3 className="font-play text-3xl font-bold">Connor Warme</h3>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="flex font-play text-xl font-semibold">
        <Link to={"/about"} className="m-2 py-2 px-1">About</Link>
        <Link to={"/contact"} className="m-2 py-2 px-1">Contact</Link>
      </div>
    </div>
   );
}
 
export default Header;