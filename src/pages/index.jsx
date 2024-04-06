import AboutMini from '../components/AboutMini'
import Porfolio from '../components/Portfolio'
import portraitPhoto from '../images/gallery/grin.jpg'


const Home = () => {
  return (
    <>
      <h1 className="text-center font-grenze text-4xl font-bold tracking-wide text-wave-spray m-10 sm:text-6xl sm:m-24">
        Connor Warme
      </h1>
      <div className='grid sm:grid-cols-6'>
      <div className='col-start-2 col-end-5'>
      <div className="mb-4 mt-4 flex w-dvw justify-center">
        <img
          src={portraitPhoto}
          alt="Portrait of Connor"
          className="h-40 w-48 rounded-lg border border-wave-spray/50 object-cover sm:w-96 sm:h-80"
        />
      </div>
      <div className='m-2 mb-40 flex justify-center'>
        <ul className="grid justify-center gap-3 rounded-md bg-midnight-green/75 pb-3 text-start font-body text-wave-spray w-full max-w-sm">
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
      <Porfolio />
      <AboutMini />
      </div>
      </div>
    </>
  )
}

export default Home

