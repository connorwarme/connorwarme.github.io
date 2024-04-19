import AboutMini from '../components/AboutMini'
import Porfolio from '../components/Portfolio'
import portraitPhoto from '../images/gallery/grin.jpg'


const Home = () => {
  return (
    <>
      <h1 className="text-center font-grenze text-4xl font-bold tracking-wide text-wave-spray m-10 sm:text-6xl sm:m-24">
        Connor Warme
      </h1>
      <div className='grid sm:grid-cols-9'>
      <div className='sm:col-start-2 sm:col-end-9 flex flex-col items-center'>
      <div className='md:grid lg:grid-cols-2 lg:gap-16'>
        <div className="mb-4 mt-4 flex justify-center lg:justify-end">
          <img
            src={portraitPhoto}
            alt="Portrait of Connor"
            className="h-40 w-48 rounded-lg border border-wave-spray/50 object-cover shadow-lg shadow-gunmetal/20 sm:w-96 sm:h-96 lg:border-4 lg:border-wave-spray/80"
          />
        </div>
        <div className='w-dvw mb-40 flex justify-center lg:justify-start lg:m-4 lg:w-auto'>
          <ul className="grid justify-center gap-3 sm:rounded-md bg-midnight-green pb-3 text-start font-body text-wave-spray w-full shadow-lg shadow-gunmetal/20 sm:max-w-sm sm:bg-midnight-green/75 lg:bg-wave-spray/80 lg:text-midnight-green lg:pb-0 lg:w-96">
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
                <em className="font-grenze text-3xl font-semibold">C</em>ritical
                thinker
              </p>
              <p>{` // a detail-driven problem-solver`}</p>
            </li>
            <li>
              <img />
              <p className="text-xl">
                <em className="font-grenze text-3xl font-semibold">C</em>ommunicator
              </p>
              <p>{` // empathetic listener and collaborator`}</p>
            </li>
            <li>
              <img />
              <p className="text-xl">
                <em className="font-grenze text-3xl font-semibold">C</em>oder
              </p>
              <p>{` // versatile full-stack developer`}</p>
            </li>
            <li>
              <img />
              <p className="text-xl">
                <em className="font-grenze text-3xl font-semibold">C</em>ommitted to
                excellence
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

