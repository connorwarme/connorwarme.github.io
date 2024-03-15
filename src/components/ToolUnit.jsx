const ToolUnit = ({ unit }) => {
  return ( 
    <div className="flex flex-col justify-center items-center">
      { unit && unit.img && unit.img.src && (
        <>
          <img src={unit.img.src} alt={unit.img.alt} className="w-20 h-20 m-2" />
          <p>{unit.title}</p>
        </>
      )}
    </div>
   );
}
 
export default ToolUnit;