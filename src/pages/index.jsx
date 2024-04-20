import AboutMini from '../components/AboutMini.jsx'
import Porfolio from '../components/Portfolio.jsx'
import portraitPhoto from '../images/gallery/grin.jpg'

const Home = () => {
  return (
    <>
      <h1 className="m-10 text-center font-grenze text-4xl font-bold tracking-wide text-wave-spray sm:m-24 sm:text-6xl">
        Connor Warme
      </h1>
      <div className="grid sm:grid-cols-9">
        <div className="flex flex-col items-center sm:col-start-2 sm:col-end-9">
          <div className="md:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-4 mt-4 flex justify-center lg:justify-end">
              <img
                src={portraitPhoto}
                alt="Portrait of Connor"
                className="h-40 w-48 rounded-lg border border-wave-spray/50 object-cover shadow-lg shadow-gunmetal/20 sm:h-96 sm:w-96 lg:border-4 lg:border-wave-spray/80"
              />
            </div>
            <div className="mb-40 flex w-dvw justify-center lg:m-4 lg:w-auto lg:justify-start">
              <ul className="grid w-full justify-center gap-3 bg-midnight-green pb-3 text-start font-body text-wave-spray shadow-lg shadow-gunmetal/20 sm:max-w-sm sm:rounded-md sm:bg-midnight-green/75 lg:w-96 lg:bg-wave-spray/80 lg:pb-0 lg:text-midnight-green">
                <li>
                  <img />
                  <p className="text-xl">
                    <em className="font-grenze text-3xl font-semibold">C</em>
                    ompassionate human
                  </p>
                  <p>{` // a kind and caring presence`}</p>
                </li>
                <li>
                  <img />
                  <p className="text-xl">
                    <em className="font-grenze text-3xl font-semibold">C</em>
                    ritical thinker
                  </p>
                  <p>{` // a detail-driven problem-solver`}</p>
                </li>
                <li>
                  <img />
                  <p className="text-xl">
                    <em className="font-grenze text-3xl font-semibold">C</em>
                    ommunicator
                  </p>
                  <p>{` // empathetic listener and collaborator`}</p>
                </li>
                <li>
                  <img />
                  <p className="text-xl">
                    <em className="font-grenze text-3xl font-semibold">C</em>
                    oder
                  </p>
                  <p>{` // versatile full-stack developer`}</p>
                </li>
                <li>
                  <img />
                  <p className="text-xl">
                    <em className="font-grenze text-3xl font-semibold">C</em>
                    ommitted to excellence
                  </p>
                  <p>{` // in everything I do`}</p>
                </li>
              </ul>
            </div>
          </div>
          <Porfolio />
          <AboutMini />
        </div>
      </div>
    </>
  )
}

export default Home
