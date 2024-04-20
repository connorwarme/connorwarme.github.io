import Tools from '../components/Tools.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import AboutComp from '../components/About.jsx'
import resume from '../assets/ConnorWarmeResume.pdf'

const About = () => {
  const cv = {
    text: 'Resume',
    url: resume,
    style:
      'btn-link text-wave-spray flex items-center py-2 px-4 md:px-8 lg:px-12 text-xl relative shadow-sm shadow-slate-800 active:left-[1px] active:top-[2px] active:shadow-none',
  }
  const gh = {
    text: 'GitHub',
    url: 'https://github.com/connorwarme',
    style:
      'btn-link text-wave-spray flex items-center py-2 px-4 md:px-8 lg:px-12 text-xl',
  }
  return (
    <div className="justify-items-center md:grid md:grid-cols-9">
      <div className="flex flex-col items-center text-wave-spray md:col-start-2 md:col-end-9 md:mb-64 lg:max-w-[960px]">
        <h1 className="m-10 text-center font-grenze text-4xl xl:m-24">About</h1>
        <div className="mb-64 bg-midnight-green/75 p-2 font-play shadow-lg shadow-gunmetal/20 sm:px-4 md:mb-0 md:rounded-t-md md:shadow-none">
          <h3 className="pb-3 pt-3 text-center text-xl font-semibold">
            Hi, I&#39;m Connor - a versatile software developer with full-stack
            experience.
          </h3>
          <p className="sm:px-8">
            I&apos;m a passionate problem-solver, proficient in full stack
            JavaScript, with a strong desire to apply and grow my software
            development skills. Known for my kindness and empathy, I&apos;m a
            reliable and responsible team-player with excellent communication
            skills. I&apos;m eager for an opportunity and committed to building
            a successful career in the field.
          </p>
          <Tools className="bg-wave-spray" />
          <div className="mb-4 flex justify-center gap-4 sm:gap-12">
            <ExternalLink link={cv} />
            <ExternalLink link={gh} />
          </div>
          <div className="mx-10 h-0 w-0 rounded-sm bg-wave-spray md:mt-10 md:h-[2px] md:w-auto "></div>
        </div>
        <AboutComp />
      </div>
    </div>
  )
}

export default About
