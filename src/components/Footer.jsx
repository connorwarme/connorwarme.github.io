import { VscTools, VscGithubInverted } from 'react-icons/vsc'
import { BsLinkedin } from "react-icons/bs";
import { siteTools } from '../data/toolData';
import ToolUnit from './ToolUnit';

const Footer = () => {

  return ( 
    <div className="w-dvw bg-midnight-green/75 text-wave-spray font-play flex flex-col justify-center p-4">
      <a href="#top" className="text-center font-body ">Back to Top</a>
      <div className='flex justify-center py-2'>
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
    </div>
   );
}
 
export default Footer;