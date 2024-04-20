import { tools } from '../data/toolData.js'
import ToolUnit from './ToolUnit.jsx'

const Tools = () => {
  return (
    <div className="flex flex-col items-center pb-4 pt-4">
      <h2 className="text-center text-xl font-semibold">
        Tools and Technologies
      </h2>
      <div className="m-2 flex flex-wrap justify-center gap-2 md:max-w-screen-md">
        {tools.map((tool) => (
          <ToolUnit key={tool.title} unit={tool} />
        ))}
      </div>
    </div>
  )
}

export default Tools
