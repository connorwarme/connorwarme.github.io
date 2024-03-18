import Card from "./Card";

const fakeData = [
  {
    title: 'Pro Site'
  },
  {
    title: 'Fan Lair'
  },
  {
    title: 'Battleship'
  },
  {
    title: 'Shopping Cart'
  }
]

const Porfolio = () => {
  return ( 
    <div>
      <h2 className="font-grenze text-2xl text-wave-spray">Portfolio</h2>
      {
        fakeData.map((item, index) => <Card key={index} item={item} />)
      }
    </div>
   );
}
 
export default Porfolio;