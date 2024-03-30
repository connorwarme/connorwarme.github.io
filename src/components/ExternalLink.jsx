import { HiOutlineExternalLink as LinkIcon } from 'react-icons/hi'
const ExternalLink = ({ link }) => {

  const style = `inline-block transition ease-in-out duration-150 ${link.style}`
  return ( 
    <a href={link.url} target="_blank" rel="noreferrer" className={style}>
      <span>{link.text}</span>
      <LinkIcon className='h-4 w-4 flex-shrink-0 ml-[3px] mb-[2px] inline-block'/>
    </a>
   );
}
 
export default ExternalLink;