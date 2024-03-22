const ToolUnit = ({ unit }) => {

  const imgClass = !unit.mini ? "w-14 h-14 m-2" : "w-6 h-6 m-1"
  return ( 
    <div className="flex flex-col justify-center items-center">
      { unit && unit.img && unit.img.src && (
        <>
          <img src={unit.img.src} alt={unit.img.alt} className={imgClass} />
          { !unit.mini && <p className="text-sm">{unit.title}</p> }
        </>
      )}
    </div>
   );
}
 
export default ToolUnit;