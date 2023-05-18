import App from "./App"
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const ShoppingList=()=>{
  const listItems=products.map(e=>
    <li
    key={e.id}
    style={{
      color:e.isFruit? 'magenta':'darkgreen'
    }}    
    >
      {e.title}
    </li>
  );
  return(
    <ul>{listItems}</ul>
  );
}
export default ShoppingList
