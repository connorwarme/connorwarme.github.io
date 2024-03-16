const ToolUnit = ({ unit }) => {
  return ( 
    <div className="flex flex-col justify-center items-center">
      { unit && unit.img && unit.img.src && (
        <>
          <img src={unit.img.src} alt={unit.img.alt} className="w-14 h-14 m-2" />
          <p className="text-sm">{unit.title}</p>
        </>
      )}
    </div>
   );
}
 
export default ToolUnit;