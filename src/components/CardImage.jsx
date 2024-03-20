const CardImage = ({ item }) => {
  return ( 
    <figure className="group w-inherit relative overflow-hidden">
      <img src={item.img.src} alt={item.img.alt} className="w-full h-full object-cover rounded-md" />
      <figcaption className="flex flex-col justify-evenly items-center p-2 z-20 absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100" >
        <h2 className="text-xl text-gunmetal font-play font-bold text-center" >{item.summary}</h2>
        <a className="border-bay-current text-gunmetal border-2 text-center w-fit p-2 pr-4 pl-4 rounded-lg" href={item.url} target="_blank" rel="noreferrer">Visit Website</a>
      </figcaption>
      <div className="bg-wave-spray/80 z-10 absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 rounded-md" ></div>
    </figure>
   );
}
 
export default CardImage;