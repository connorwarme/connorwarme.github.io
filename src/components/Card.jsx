import ToolUnit from "./ToolUnit";
import { useState } from "react";

const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  // need to change ToolUnit so that I can pass in the styling needed

  return ( 
    <>
    {
      item && item.title && (
        <div className="bg-wave-spray/50 m-2 rounded-lg">
          <div className="flex mt-2 mb-2 justify-between">
            <h3 className="text-xl text-gunmetal font-body">{item.title}</h3>
            <p>{expanded ? '-' : '+'}</p>
          </div>
          <a className="w-inherit " href={item.url} target="_blank" rel="noreferrer">
            <img src={item.img.src} alt={item.img.alt} className="w-inherit object-cover rounded-t-lg" />
          </a>
          <p>{item.points[0]}</p>
          <ul className="flex items-center">
          <label className="justify-self-start mr-2">Built with:</label>
          {
            item.tools.map((tool, index) => <ToolUnit key={index} unit={tool} />)
          }
          </ul>
        </div>
      )
    }
    </>
   );
}
 
export default Card;