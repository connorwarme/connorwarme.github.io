const CardImage = ({ item }) => {
  return (
    <figure className="w-inherit group relative overflow-hidden rounded-md">
      <img
        src={item.img.src}
        alt={item.img.alt}
        className="duration-250 h-full w-full object-cover transition ease-in-out group-hover:scale-110"
      />
      <figcaption className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-evenly p-2 font-play opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <h2 className="text-center text-xl font-bold text-wave-spray">
          {item.summary}
        </h2>
        <a
          className="w-fit rounded-lg border-2 border-moonstone p-2 pl-4 pr-4 text-center font-semibold text-wave-spray transition duration-300 ease-in-out hover:bg-moonstone"
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </figcaption>
      <div className="absolute left-0 top-0 z-10 h-full w-full rounded-md bg-gradient-to-r from-bay-current via-slate-800 to-midnight-green opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"></div>
    </figure>
  )
}

export default CardImage
