import Tools from "../components/Tools";
import ExternalLink from "../components/ExternalLink";
import AboutComp from "../components/About";
import resume from "../assets/ConnorWarmeResume.pdf"

const About = () => {

  const cv = {
    text: "Resume",
    url: resume,
    style: "btn-link text-wave-spray flex items-center py-2 px-4 md:px-8 lg:px-12 text-xl relative shadow-sm shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none"
  }
  const gh = {
    text: 'GitHub',
    url: "https://github.com/connorwarme",
    style: "btn-link text-wave-spray flex items-center py-2 px-4 md:px-8 lg:px-12 text-xl"
  }
  return ( 
    <div className="md:grid md:grid-cols-9 justify-items-center">
      <div className="text-wave-spray flex flex-col items-center md:col-start-2 md:col-end-9 md:mb-64 lg:max-w-[960px]">
        <h1 className="text-4xl font-grenze text-center m-10 xl:m-24">About</h1>
        <div className="bg-midnight-green/75 font-play p-2 mb-64 shadow-lg shadow-gunmetal/20 sm:px-4 md:shadow-none md:mb-0 md:rounded-t-md" >
          <h3 className="text-xl font-semibold pt-3 pb-3 text-center">
            Hi, I&#39;m Connor - a versatile software developer with full-stack experience.
          </h3>
          <p className="sm:px-8">
            I&apos;m a passionate problem-solver, proficient in full stack JavaScript, with a strong desire to apply and grow my software development skills. 
            Known for my kindness and empathy, I&apos;m a reliable and responsible team-player with excellent communication skills.
            I&apos;m eager for an opportunity and committed to building a successful career in the field.
          </p>
          <Tools className="bg-wave-spray" />
          <div className="flex justify-center mb-4 gap-4 sm:gap-12">
            <ExternalLink link={cv} />
            <ExternalLink link={gh} />
          </div>
          <div className="w-0 h-0 bg-wave-spray rounded-sm mx-10 md:w-auto md:h-[2px] md:mt-10 "></div>
        </div>
        <AboutComp />
      </div>
    </div>
   );
}
 
export default About;