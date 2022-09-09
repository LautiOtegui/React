import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
function App() {

  const categories = ["Products", "Shoes"]
  return (
  <>
    <NavBar categories={categories}/>
    <div><ItemListContainer greeting={"Shipment Shoes"}/></div>
    


  </>);
}

export default App;
