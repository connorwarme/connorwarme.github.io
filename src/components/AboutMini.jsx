import { Link } from 'react-router-dom'
import { IoRocketSharp as Rocket } from 'react-icons/io5'
import ExternalLink from './ExternalLink'
import winds from '../images/gallery/winds.jpg'

const AboutMini = () => {
  const bullets = [
    'Proficient in full stack JavaScript (including React and Node.js), code versioning tools (Git), continuous integration and deployment (w/ GitHub), website design and styling, and more',
    'Reliable and responsible team-player with excellent communication skills who embodies kindness and empathy',
    'Excited for an opportunity to grow and apply software development knowledge and skills',
  ]
  const kd = {
    text: 'Katrina Duff',
    url: 'https://katrinadphotography.pixieset.com',
    style:
      'inline-block transition ease-in-out duration-150 hover:underline pl-2',
  }
  return (
    <>
      <div className="mb-24 mt-10 bg-midnight-green font-body shadow-lg shadow-gunmetal/20 sm:rounded-md lg:max-w-[960px]">
        <h3 className="m-2 p-2 pb-0 pt-6 text-center font-grenze text-3xl">
          A software developer who&apos;s a craftsman at heart:{' '}
        </h3>
        <h3 className="m-2 p-2 pt-2 text-center text-xl">
          detail-driven, analytical, hardworking and meticulous in his pursuit
          of elegant interfaces and excellent solutions.
        </h3>

        <ul className="m-2 lg:mx-8">
          {bullets.map((point, index) => {
            return (
              <li key={index} className="flex p-2">
                <Rocket
                  className="m-1 mr-2 shrink-0 text-wave-spray"
                  style={{ height: '16px', width: '16px' }}
                />
                <span>{point}</span>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-center gap-4 p-2 pb-4 font-play text-xl font-semibold tracking-wide sm:gap-12">
          <Link
            to={'about'}
            className="btn-link relative flex items-center px-4 py-2 text-wave-spray shadow-md shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none md:h-14 md:px-8 lg:px-12"
          >
            About
          </Link>
          <Link
            to={'contact'}
            className="btn-link relative flex items-center px-4 py-2 text-wave-spray shadow-md shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none md:h-14 md:px-8 lg:px-12"
          >
            Contact
          </Link>
        </div>
        <div className="relative">
          <img
            src={winds}
            alt="Connor lakeside in the Wind River Range"
            className="w-dvh min-h-24 object-cover sm:rounded-b-md"
          />
          <p className="absolute bottom-1 right-2 text-wave-spray font-play">
            Photo:
            <ExternalLink link={kd} />
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMini
