import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
function App() {

  const categories = ["Production", "Drumkits"]
  return (
  <>
    <NavBar categories={categories}/>
    <div><ItemListContainer greeting={"Sounds From the Universe"}/></div>
    


  </>);
}

export default App;
