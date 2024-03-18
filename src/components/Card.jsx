import ToolUnit from "./ToolUnit";

const Card = ({ item }) => {
  return ( 
    <>
    {
      item && item.title && (
        <div className="bg-wave-spray/50 m-2 p-2 ">
          <a className="w-inherit " href={item.url} target="_blank" rel="noreferrer">
            <img src={item.img.src} alt={item.img.alt} className="w-inherit object-cover" />
          </a>
          <h3 className="text-xl text-gunmetal font-body">{item.title}</h3>
          <p>{item.points[0]}</p>
          <ul className="flex">Built with:
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