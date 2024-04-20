import { HiOutlineExternalLink as LinkIcon } from 'react-icons/hi'

const ExternalLink = ({ link }) => {
  const style = `${link.style}`
  return (
    <a href={link.url} target="_blank" rel="noreferrer" className={style}>
      <span>{link.text}</span>
      <LinkIcon className="mb-[2px] ml-[3px] inline-block h-4 w-4 flex-shrink-0" />
    </a>
  )
}

export default ExternalLink
