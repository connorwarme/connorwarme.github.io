import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div
      className="flex items-center text-wave-spray md:bg-midnight-green/35 md:px-4 md:shadow-[0_0_10px_rgba(15,36,45,0.5)]"
      id="top"
    >
      <div className="ml-4">
        <Link to={'/'} className="   ">
          <h3 className="relative font-grenze text-[2.5rem] font-bold transition-all duration-300 ease-in-out active:left-[1px] active:top-[2px] active:shadow-none">
            CW
          </h3>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="flex font-play text-lg font-semibold sm:mr-4 lg:mr-12">
        <div className="m-auto flex h-auto w-20 justify-center md:w-32">
          <Link
            to={'/about'}
            className="relative m-2 p-4 transition-all duration-300 ease-in-out before:absolute before:bottom-[15%] before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:rounded-sm before:bg-wave-spray before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-[50%] after:top-[15%] after:h-[2px] after:w-0 after:origin-center after:rounded-sm after:bg-wave-spray after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:font-extrabold hover:tracking-widest hover:before:left-[0%] hover:before:w-[100%] hover:after:left-[0%] hover:after:w-[100%] active:left-[1px] active:top-[2px] active:shadow-none md:mx-4"
          >
            About
          </Link>
        </div>
        <div className="m-auto flex h-auto w-24 justify-center">
          <Link
            to={'/contact'}
            className="relative m-2 px-1 py-4 transition-all duration-300 ease-in-out before:absolute before:bottom-[15%] before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:rounded-sm before:bg-wave-spray before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-[50%] after:top-[15%] after:h-[2px] after:w-0 after:origin-center after:rounded-sm after:bg-wave-spray after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:font-extrabold hover:tracking-widest hover:before:left-[0%] hover:before:w-[100%] hover:after:left-[0%] hover:after:w-[100%] active:left-[1px] active:top-[2px] active:shadow-none md:mx-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
