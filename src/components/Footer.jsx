import { VscTools } from 'react-icons/vsc'
import { siteTools } from '../data/toolData';
import ToolUnit from './ToolUnit';

const Footer = () => {

  return ( 
    <div className="w-dvw">
      <a href="#top">Back to Top</a>
      <div>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
      <div className='flex justify-center items-center'>
        <span className='flex justify-center'>
          <VscTools className="h-6 w-6 text-wave-spray" />
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