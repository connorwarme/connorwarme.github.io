import { useState } from "react";
import ToolUnit from "./ToolUnit";
import CardImage from "./CardImage";

const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  // need to change ToolUnit so that I can pass in the styling needed

  return ( 
    <>
    {
      item && item.title && (
        <div className="bg-midnight-green/75 m-2 p-2 rounded-lg">
          <div className="flex mb-2 justify-center">
            <a className="w-inherit " href={item.url} target="_blank" rel="noreferrer">
              <h3 className="text-xl text-wave-spray font-body underline">{item.title}</h3>
            </a>
          </div>          
          <CardImage item={item} />
          <ul className="flex items-center">
          <label className="justify-self-start mr-2">Built with:</label>
          {
            item.tools.map((tool, index) => <ToolUnit key={index} unit={tool} />)
          }
          </ul>
          <button>{expanded ? 'Minimize' : 'See More'}</button>
        </div>
      )
    }
    </>
   );
}
 
export default Card;