import { useRouteError } from "react-router-dom";
import Header from "../components/Header"
import ScrollToAnchor from "../components/ScrollToAnchor"
import Footer from "../components/Footer"
import waterfallPhoto from '../images/gallery/waterfall1.jpg'
import { Link } from "react-router-dom";
import { TbFaceIdError as ErrorFace } from "react-icons/tb";
import { IoHomeOutline as Home } from "react-icons/io5";
import { IoPersonCircleOutline as About } from "react-icons/io5";
import { AiOutlineMail as Contact } from "react-icons/ai";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
{/* <i>{error.statusText || error.message}</i> */}

  const linkStyle = "btn-link text-wave-spray text-md md:text-xl font-semibold flex items-center w-full py-2 px-6 md:h-14 md:px-8 lg:px-12 relative shadow-md shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none"
  return (
    <div id="error-page" className='flex flex-col justify-center min-h-dvh'>
      <Header />
      <ScrollToAnchor />
      <img
        src={waterfallPhoto}
        alt="Waterfall background image"
        className="fixed left-0 top-0 -z-10 h-dvh w-dvw object-cover"
      />
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-grenze text-4xl m-4 md:m-10 xl:m-16 text-center">{`404 Error: ${error.statusText || error.message}`}</h1>
        <div className="font-play font-semibold bg-midnight-green/75 sm:w-4/6 max-w-2xl p-4 sm:px-8 md:px-12 sm:rounded-md shadow-sm shadow-gunmetal text-wave-spray">
          <div className="flex justify-center">
            <ErrorFace className="text-wave-spray h-16 w-16 md:h-24 md:w-24"/>
          </div>
          <h3 className="pt-4 text-center">Whoops! You&apos;ve wandered into the wilderness, and the url navigation failed to deliver. Try one of the following options:</h3>
          <div className="flex justify-center m-4 p-4 text-wave-spray">
          <div className="grid grid-row-3 justify-items-center items-center gap-8">
            <Link to={"/"} className={linkStyle} >
              <Home className="h-6 w-6 md:h-8 md:w-8 pr-2" />
              <span>Home</span>
            </Link>
            <Link to={"/about"} className={linkStyle} >
              <About className="h-6 w-6 md:h-8 md:w-8 pr-2" />
              <span>About</span>
            </Link>
            <Link to={"contact"} className={linkStyle}>
              <Contact className="h-6 w-6 md:h-8 md:w-8 pr-2" />
              <span>Contact</span>
            </Link>
          </div>

          </div>
        </div>
      </div>
      <div className='grow'></div>
      <Footer />
    </div>
  );
}