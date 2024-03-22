import About from '../components/About'
import Porfolio from '../components/Portfolio'
import portraitPhoto from '../images/gallery/grin.jpg'

const Home = () => {
  return (
    <>
      <div className="fake-header h-20 w-dvw"></div>
      <h1 className="text-center font-grenze text-4xl font-bold tracking-wider text-wave-spray/90">
        Connor Warme
      </h1>
      <div className="mb-4 mt-4 flex w-dvw justify-center">
        <img
          src={portraitPhoto}
          alt="Portrait of Connor"
          className="h-40 w-48 rounded-lg border border-wave-spray/50 object-cover"
        />
      </div>
      <ul className="m-2 mb-40 grid justify-center gap-3 rounded-md bg-dark-forest/55 p-1 pb-3 text-start font-body text-wave-spray">
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
      <Porfolio />
      <About />
    </>
  )
}

export default Home
