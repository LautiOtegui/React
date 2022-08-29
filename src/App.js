import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
function App() {

  const categories = ["Production", "Drumkits"]
  return (
  <>
    <NavBar categories={categories}/>
    <ItemListContainer greeting={"Sounds From the Universe"}/>


  </>);
}

export default App;
