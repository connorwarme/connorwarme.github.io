import tools from '../data/toolData'
import ToolUnit from './ToolUnit'

const Tools = () => {
  return (
    <div className="pt-4 pb-4">
      <h2 className="text-md font-semibold text-center">Tools and Technologies</h2>
      <div className="m-2 flex flex-wrap justify-center gap-1 ">
        {tools.map((tool) => (
          <ToolUnit key={tool.title} unit={tool} />
        ))}
      </div>
    </div>
  )
}

export default Tools
