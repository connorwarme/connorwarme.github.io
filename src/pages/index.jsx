import About from "../components/About";
import Porfolio from "../components/Portfolio";
import portraitPhoto from "../images/gallery/grin.jpg"

const Home = () => {

  return ( 
    <>
      <div className="fake-header h-20 w-dvw"></div>
      <h1 className="text-4xl text-center font-grenze font-bold text-wave-spray/90 tracking-wider" >Connor Warme</h1>
      <div className="w-dvw flex justify-center mt-4 mb-4">
        <img src={portraitPhoto} alt="Portrait of Connor" className="h-40 w-48 object-cover rounded-lg border-wave-spray/50 border" />
      </div>
      <ul className="m-2 p-1 pb-3 mb-40 grid justify-center gap-3 bg-dark-forest/55 rounded-md text-wave-spray font-body text-start">
        <li>
          <img />
          <p className="text-xl"><em className="font-grenze font-semibold text-3xl">C</em>ompassionate human</p>
          <p>
            {` // a kind and caring presence`}
          </p>
        </li>
        <li>
          <img />
          <p className="text-xl"><em className="font-grenze font-semibold text-3xl">C</em>ritical thinker</p> 
          <p>
            {` // a detail-driven problem-solver`}
          </p>
        </li>
        <li>
          <img />
          <p className="text-xl"><em className="font-grenze font-semibold text-3xl">C</em>ommunicator</p>
          <p>
            {` // empathetic listener and collaborator`}
          </p>
        </li>
        <li>
          <img />
          <p className="text-xl"><em className="font-grenze font-semibold text-3xl">C</em>oder</p>
          <p>
            {` // versatile full-stack developer`}
          </p>
        </li>
        <li>
          <img />
          <p className="text-xl"><em className="font-grenze font-semibold text-3xl">C</em>ommitted to excellence</p>
          <p>
            {` // in everything I do`}
          </p>
        </li>
      </ul>
      <Porfolio />
      <About />
    </>
   );
}
 
export default Home;