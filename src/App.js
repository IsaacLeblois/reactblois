import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navBar';
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
      <Footer name="Azul"></Footer>
    </div>
  );
}

export default App;
