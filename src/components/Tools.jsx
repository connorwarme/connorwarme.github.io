import tools from "../data/toolData";
import ToolUnit from "./ToolUnit";

const Tools = () => {

  return ( 
    <div>
      <h2 className="text-xl">Tools and Technologies</h2>
      <div className="flex flex-wrap gap-1 justify-center m-2">
        {
          tools.map(tool => <ToolUnit key={tool.title} unit={tool} />)
        }
      </div>
    </div>
   );
}
 
export default Tools;