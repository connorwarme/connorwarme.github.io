const CardImage = ({ item }) => {
  return ( 
    <figure className="group w-inherit relative overflow-hidden rounded-md">
      <img src={item.img.src} alt={item.img.alt} className="w-full h-full object-cover transition ease-in-out duration-250 group-hover:scale-110" />
      <figcaption className="flex flex-col justify-evenly items-center p-2 z-20 absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 font-play transition ease-in-out duration-300" >
        <h2 className="text-xl text-wave-spray font-bold text-center" >{item.summary}</h2>
        <a className="border-moonstone text-wave-spray border-2 text-center w-fit p-2 pr-4 pl-4 rounded-lg hover:bg-moonstone transition ease-in-out duration-300 font-semibold" href={item.url} target="_blank" rel="noreferrer">Visit Website</a>
      </figcaption>
      <div className="bg-gradient-to-r from-bay-current via-slate-800 to-dark-forest z-10 absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 rounded-md transition ease-in-out duration-500" ></div>
    </figure>
   );
}
 
export default CardImage;