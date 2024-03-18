const Card = ({ item }) => {
  return ( 
    <>
    {
      item && item.title && (
        <div className="bg-wave-spray m-2 p-2 ">
          <h3 className="text-xl text-gunmetal">{item.title}</h3>
        </div>
      )
    }
    </>
   );
}
 
export default Card;