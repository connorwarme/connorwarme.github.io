import tools from "../data/toolData";
import ToolUnit from "./ToolUnit";

const Tools = () => {

  return ( 
    <div>
      <h2 className="text-xl">Tools and Technologies</h2>
      {
        tools.map(tool => <ToolUnit key={tool.title} unit={tool} />)
      }
    </div>
   );
}
 
export default Tools;