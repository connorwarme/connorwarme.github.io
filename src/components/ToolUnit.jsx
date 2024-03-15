const ToolUnit = ({ unit }) => {
  return ( 
    <div>
      { unit && unit.img && unit.img.src && (
        <img src={unit.img.src} alt={unit.img.alt} className="w-32 h-32 m-2" />
      )}
    </div>
   );
}
 
export default ToolUnit;