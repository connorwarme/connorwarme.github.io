import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <div className="flex items-center text-wave-spray md:px-4 md:bg-midnight-green/35 md:shadow-[0_0_10px_rgba(15,36,45,0.5)]" id="top">
      <div className="ml-4">
        <Link to={"/"} className="   ">
          <h3 className="font-grenze text-[2.5rem] font-bold relative active:left-[1px] active:top-[2px] active:shadow-none transition-all duration-300 ease-in-out">CW</h3>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="flex font-play text-lg font-semibold sm:mr-4 lg:mr-12">
        <div className="h-auto w-20 flex justify-center m-auto md:w-32">
          <Link to={"/about"} className="m-2 p-4 relative hover:tracking-widest hover:font-extrabold transition-all duration-300 ease-in-out before:absolute before:left-[50%] before:h-[2px] before:bottom-[15%] before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[100%] hover:before:left-[0%] before:rounded-sm after:absolute after:left-[50%] after:h-[2px] after:top-[15%] after:transition-all after:ease-in-out after:duration-300 after:bg-wave-spray after:origin-center after:content-[''] after:w-0 hover:after:w-[100%] hover:after:left-[0%] after:rounded-sm md:mx-4 active:left-[1px] active:top-[2px] active:shadow-none">About</Link>
        </div>
        <div className="h-auto w-24 flex justify-center m-auto">
          <Link to={"/contact"} className="m-2 py-4 px-1 relative hover:tracking-widest hover:font-extrabold transition-all duration-300 ease-in-out before:absolute before:left-[50%] before:h-[2px] before:bottom-[15%] before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[100%] hover:before:left-[0%] before:rounded-sm after:absolute after:left-[50%] after:h-[2px] after:top-[15%] after:transition-all after:ease-in-out after:duration-300 after:bg-wave-spray after:origin-center after:content-[''] after:w-0 hover:after:w-[100%] hover:after:left-[0%] after:rounded-sm md:mx-4 active:left-[1px] active:top-[2px] active:shadow-none">Contact</Link>
        </div>

      </div>
    </div>
   );
}
 
export default Header;