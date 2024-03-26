import { useState } from 'react'
import Card from './Card'
import cardData from '../data/projectData'

const Porfolio = () => {
  const [expanded, setExpanded] = useState(null)

  const handleSelection = (id) => {
    setExpanded(expanded === id ? null : id)
  }
  return (
    <div id='portfolio'>
      <h2 className="font-grenze text-2xl text-wave-spray">Portfolio</h2>
      {cardData.map((item) => (
        <Card
          key={item.id}
          item={item}
          selection={expanded}
          handleSelection={handleSelection}
        />
      ))}
    </div>
  )
}

export default Porfolio
