import { VscTools, VscGithubInverted } from 'react-icons/vsc'
import { BsLinkedin } from 'react-icons/bs'
import { siteTools } from '../data/toolData.js'
import ToolUnit from './ToolUnit.jsx'
import ExternalLink from './ExternalLink.jsx'

const Footer = () => {
  const ts = {
    text: 'Taylor Shaffer',
    url: 'https://www.taylorshaffer.com/',
    style:
      'inline-block transition ease-in-out duration-150 hover:underline pl-1',
  }

  return (
    <div className="flex w-dvw flex-col justify-center bg-midnight-green/75 p-4 font-play text-wave-spray shadow-lg shadow-gunmetal/20">
      <div className="flex justify-center">
        <a
          href="#top"
          className="relative pb-[6px] text-center font-body before:absolute before:bottom-[15%] before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:rounded-sm before:bg-wave-spray before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[5%] hover:before:w-[90%] md:mx-4"
        >
          Back to Top
        </a>
      </div>
      <div className="flex justify-center pb-2">
        <div>
          <a
            href="https://github.com/connorwarme"
            target="_blank"
            rel="noreferrer"
            title="Check out my GitHub profile"
            className="hover:scale-110"
          >
            <VscGithubInverted
              className="m-2 h-6 w-6 transition-all duration-500 ease-in-out hover:rotate-[360deg]"
              aria-label="GitHub icon"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/connor-warme-13c8"
            target="_blank"
            rel="noreferrer"
            title="Connect on LinkedIn"
          >
            <BsLinkedin
              alt="LinkedIn"
              className="m-2 h-6 w-6 transition-all duration-500 ease-in-out hover:rotate-[360deg]"
              aria-label="LinkedIn icon"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center border-t border-wave-spray pt-2">
        <span className="flex justify-center">
          <VscTools className="h-6 w-6 " />
          <span className="ml-1">:</span>
        </span>
        <div className="flex">
          {siteTools.map((item, index) => (
            <ToolUnit key={index} unit={item} />
          ))}
        </div>
      </div>
      <div>
        <p className="pt-2 text-center">
          Background: Cascade Falls, Yosemite, USA. Photo:
          <ExternalLink link={ts} />
        </p>
      </div>
    </div>
  )
}

export default Footer
