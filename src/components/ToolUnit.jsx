const ToolUnit = ({ unit }) => {
  const imgClass = !unit.mini ? 'w-10 h-10 m-2' : 'w-6 h-6 m-1'
  return (
    <div className="flex flex-col items-center justify-center">
      {unit && unit.img && unit.img.src && (
        <>
          <img
            src={unit.img.src}
            alt={unit.img.alt}
            className={imgClass}
            title={unit.title}
          />
          {!unit.mini && <p className="text-sm">{unit.title}</p>}
        </>
      )}
    </div>
  )
}

export default ToolUnit
