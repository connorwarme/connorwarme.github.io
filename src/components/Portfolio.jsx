import { useState } from 'react'
import Card from './Card'
import cardData from '../data/projectData'

const Porfolio = () => {
  const [expanded, setExpanded] = useState(null)

  const handleSelection = (id) => {
    setExpanded(expanded === id ? null : id)
  }
  return (
    <div id="portfolio">
      <h2 className="m-10 text-center font-grenze text-4xl text-wave-spray">
        Portfolio
      </h2>
      <div className="flex justify-center">
        <div className="grid max-w-4xl grid-cols-1 place-items-center">
          {cardData.map((item) => (
            <Card
              key={item.id}
              item={item}
              selection={expanded}
              handleSelection={handleSelection}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Porfolio
