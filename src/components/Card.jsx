import ToolUnit from "./ToolUnit";
import CardImage from "./CardImage";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

const Card = ({ item, selection, handleSelection }) => {

  // need to change ToolUnit so that I can pass in the styling needed

  return ( 
    <>
    {
      item && item.title && (
        <div className="bg-midnight-green/75 m-2 p-2 rounded-lg font-play">
          <div className="flex mb-2 justify-center">
            <a className="w-inherit " href={item.url} target="_blank" rel="noreferrer">
              <h3 className="text-2xl text-wave-spray font-bold transition ease-in-out duration-150 hover:underline">{item.title}</h3>
            </a>
          </div>          
          <CardImage item={item} />
          <ul className="flex items-center m-1 ml-4">
          <label className="justify-self-start mr-2">Built with:</label>
          {
            item.tools.map((tool, index) => <ToolUnit key={index} unit={tool} />)
          }
          </ul>
          {
            selection === item.id ?
            <div>
              <ul className="">
                {
                  item.points.map((point, index) => {
                    return (
                      <li key={index}>{point}</li>
                    )
                  })
                }
              </ul>
              <a href={item.repo_url}>View repository</a>
            </div>

            : null
          }
          <div className="flex justify-center">
            <button className="bg-moonstone text-midnight-green p-2 pl-4 pr-4 rounded-full m-2 flex items-center" onClick={() => handleSelection(item.id)}>
            { selection === item.id 
              ? <>
                  <span>Minimize</span>
                  <VscFoldUp className="ml-2"/>
                </> 
              : <>
                  <span>See More</span>
                  <VscFoldDown className="ml-2" />
                </>
            }
            </button>
          </div>
          
        </div>
      )
    }
    </>
   );
}
 
export default Card;