import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navBar';
import ItemListContainer from './container/ItemListContainer'

const welcome = "¡Hola React!"
const stylesLi = {
  color: "red"
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div>
        <h1 className='m-64 text-gray-400'>Aqui va el contenido.</h1>
      </div>

      <Footer name="Azul"></Footer>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
