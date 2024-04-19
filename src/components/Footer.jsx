import { VscTools, VscGithubInverted } from 'react-icons/vsc'
import { BsLinkedin } from "react-icons/bs";
import { siteTools } from '../data/toolData';
import ToolUnit from './ToolUnit';
import ExternalLink from './ExternalLink';

const Footer = () => {
  const ts = {
    text: 'Taylor Shaffer',
    url: "https://www.taylorshaffer.com/",
    style: "inline-block transition ease-in-out duration-150 hover:underline pl-1"
  }

  return ( 
    <div className="w-dvw bg-midnight-green/75 text-wave-spray font-play flex flex-col justify-center p-4 shadow-lg shadow-gunmetal/20">
      <div className='flex justify-center'>
        <a href="#top" className="text-center font-body pb-[6px] relative before:absolute before:left-[50%] before:h-[1px] before:bottom-[15%] before:transition-all before:ease-in-out before:duration-300 before:bg-wave-spray before:origin-center before:content-[''] before:w-0 hover:before:w-[90%] hover:before:left-[5%] before:rounded-sm md:mx-4">Back to Top</a>
      </div>
      <div className='flex justify-center pb-2'>
        <div>
          <a href="https://github.com/connorwarme" target='_blank' rel='noreferrer' title='Check out my GitHub profile' className='hover:scale-110'>
            <VscGithubInverted className='m-2 h-6 w-6 hover:rotate-[360deg] transition-all ease-in-out duration-500' aria-label='GitHub icon'/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/connor-warme-13c8" target='_blank' rel='noreferrer' title='Connect on LinkedIn'>
            <BsLinkedin alt="LinkedIn" className='m-2 h-6 w-6 hover:rotate-[360deg] transition-all ease-in-out duration-500' aria-label='LinkedIn icon' />
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center border-t border-wave-spray pt-2'>
        <span className='flex justify-center'>
          <VscTools className="h-6 w-6 " />
          <span className="ml-1">:</span>
        </span>
        <div className='flex'>
          {
            siteTools.map((item, index) => <ToolUnit key={index} unit={item} />)
          }
        </div>
      </div>
      <div>
          <p className='text-center pt-2'>
            Background: Cascade Falls, Yosemite, USA. Photo: 
            <ExternalLink link={ts} />
          </p>
        </div>
    </div>
   );
}
 
export default Footer;