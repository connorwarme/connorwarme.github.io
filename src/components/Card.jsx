import ToolUnit from './ToolUnit'
import CardImage from './CardImage'
import { VscTools } from 'react-icons/vsc'
import { VscFoldDown, VscFoldUp } from 'react-icons/vsc'
import { HiOutlineExternalLink as LinkIcon } from 'react-icons/hi'

const Card = ({ item, selection, handleSelection }) => {
  // need to change ToolUnit so that I can pass in the styling needed

  return (
    <>
      {item && item.title && (
        <div className="m-2 rounded-lg bg-midnight-green/75 p-2 font-play max-w-sm flex flex-col justify-evenly md:self-stretch">
          <div className="mb-2 flex justify-center">
            <a
              className="w-inherit "
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-2xl font-bold text-wave-spray transition duration-150 ease-in-out hover:underline">
                {item.title}
              </h3>
            </a>
          </div>
          <CardImage item={item} />
          <ul className="m-1 ml-4 flex items-center justify-center">
            <span className="mr-2 flex items-center">
              <VscTools className="h-6 w-6 text-wave-spray" />
              <span className="ml-1">:</span>
            </span>
            {item.tools.map((tool, index) => (
              <ToolUnit key={index} unit={tool} />
            ))}
          </ul>
          <div className="has-[div.expand]:duration-1000ms max-h-0 transition-[max-height] duration-500 ease-in-out has-[div.expand]:max-h-[300px]">
            <div className="opacity-0 transition-opacity delay-150 duration-300 has-[div.expand]:opacity-100">
              {selection === item.id ? (
                <div className="expand">
                  <ul className="transition-all delay-300 duration-300 ease-in-out">
                    {item.points.map((point, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <item.bullet
                            className="mr-2"
                            style={{ height: '16px', width: '16px' }}
                          />
                          <li>{point}</li>
                        </div>
                      )
                    })}
                    <div className="flex items-center">
                      <LinkIcon
                        className="mr-2"
                        style={{ height: '16px', width: '16px' }}
                      />
                      <li>
                        <a
                          href={item.repo_url}
                          className="hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View repository
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="relative m-2 rounded-full border-2 border-wave-spray bg-transparent p-2 pl-4 pr-4 font-semibold tracking-wide text-wave-spray shadow-sm shadow-midnight-green transition-all duration-150 ease-in-out hover:animate-miniBounce active:left-[1px] active:top-[2px] active:shadow-none"
              onClick={() => handleSelection(item.id)}
            >
              {selection === item.id ? (
                <div className="flex items-center">
                  <span>Minimize</span>
                  <VscFoldUp className="ml-2 text-wave-spray" />
                </div>
              ) : (
                <div className="flex items-center">
                  <span>See More</span>
                  <VscFoldDown className="ml-2 text-wave-spray" />
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
