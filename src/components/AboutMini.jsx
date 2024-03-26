import { IoRocketSharp as Rocket } from "react-icons/io5";

const AboutMini = () => {
  const bullets = ["Proficient in full stack JavaScript (including React and Node.js), code versioning tools (Git), continuous integration and deployment (w/ GitHub), website design and styling, and more", "Reliable and responsible team-player with excellent communication skills who embodies kindness and empathy", "Excited for an opportunity to grow and apply software development knowledge and skills"]

    return ( 
    <div className="bg-midnight-green mt-10 font-body">
      <h3 className='text-3xl font-grenze m-2 p-2 pt-6 pb-0 text-center'>A software developer who&apos;s a craftsman at heart: </h3>
      <h3 className='text-xl m-2 p-2 pt-2 text-center'>detail-driven, analytical, hardworking and meticulous in his pursuit of elegant interfaces and excellent solutions.</h3>

      <ul className="m-2" >
        {
          bullets.map((point, index) => {
            return (
              <li key={index} className="flex p-2">
                <Rocket className="m-1 mr-2 text-wave-spray shrink-0" style={{ height: '16px', width: '16px' }} />
                <span>{point}</span>
              </li>
            )
          })
        }
      </ul>
      <div className="flex justify-center font-body">
        <a className="">
          About
        </a>
        <a className="">
          Contact
        </a>
      </div>
    </div>
   );
}
 
export default AboutMini;