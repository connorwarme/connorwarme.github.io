import Tools from "../components/Tools";
import AboutComp from "../components/About";

const About = () => {
  return ( 
    <>
      <h1 className="text-4xl font-grenze text-center m-10">About</h1>
      <div className="bg-midnight-green/75 font-play p-2 mb-64" >
        <h3 className="text-xl font-semibold pt-3 pb-3 text-center">
          Hi, I&#39;m Connor - a software developer with full-stack experience.
        </h3>
        <Tools className="bg-wave-spray" />
        
      </div>
      <AboutComp />
    </>
   );
}
 
export default About;