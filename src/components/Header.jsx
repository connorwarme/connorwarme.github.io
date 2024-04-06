import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <div className="flex items-center text-wave-spray md:bg-midnight-green/45 md:px-4" id="top">
      <div className="ml-4">
        <Link to={"/"} className="md:hidden ">
          <h3 className="font-grenze text-[2.5rem] font-bold ">CW</h3>
        </Link>
        <Link to={"/"} className="hidden md:block">
          <h3 className="font-play text-3xl font-bold relative before:absolute before:left-[50%] before:h-[2px] before:bottom-0 before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[98%] hover:before:left-[1%] before:rounded-sm">Connor Warme</h3>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="flex font-play text-lg font-semibold">
        <Link to={"/about"} className="m-2 py-2 px-1 relative before:absolute before:left-[50%] before:h-[2px] before:bottom-[15%] before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[90%] hover:before:left-[5%] before:rounded-sm md:mx-4">About</Link>
        <Link to={"/contact"} className="m-2 py-2 px-1 relative before:absolute before:left-[50%] before:h-[2px] before:bottom-[15%] before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[90%] hover:before:left-[5%] before:rounded-sm md:mx-4">Contact</Link>
      </div>
    </div>
   );
}
 
export default Header;