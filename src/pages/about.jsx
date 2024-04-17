import Tools from "../components/Tools";
import ExternalLink from "../components/ExternalLink";
import AboutComp from "../components/About";
import resume from "../assets/ConnorWarmeResume.pdf"

const About = () => {

  const cv = {
    text: "Resume",
    url: resume,
    style: "p-2 pr-4 pl-4 border-2 border-wave-spray rounded-lg text-xl hover:bg-wave-spray hover:text-midnight-green relative shadow-sm shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none"
  }
  const gh = {
    text: 'GitHub',
    url: "https://github.com/connorwarme",
    style: "p-2 pr-4 pl-4 border-2 border-wave-spray rounded-lg text-xl hover:bg-wave-spray hover:text-midnight-green relative shadow-sm shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none"
  }
  return ( 
    <div className="text-wave-spray">
      <h1 className="text-4xl font-grenze text-center m-10">About</h1>
      <div className="bg-midnight-green/75 font-play p-2 mb-64 sm:px-4" >
        <h3 className="text-xl font-semibold pt-3 pb-3 text-center">
          Hi, I&#39;m Connor - a versatile software developer with full-stack experience.
        </h3>
        <p className="sm:px-8">
          I&apos;m a passionate problem-solver, proficient in full stack JavaScript, with a strong desire to apply and grow my software development skills. 
          Known for my kindness and empathy, I&apos;m a reliable and responsible team-player with excellent communication skills.
          I&apos;m eager for an opportunity and committed to building a successful career in the field.
        </p>
        <Tools className="bg-wave-spray" />
        <div className="flex justify-center gap-3 mb-4 sm:gap-6">
          <ExternalLink link={cv} />
          <ExternalLink link={gh} />
        </div>
      </div>
      <AboutComp />
    </div>
   );
}
 
export default About;