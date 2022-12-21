import './App.css';
import ListaPrincipal from './components/ListaPrincipal';
import Menu from './components/Menu';
import SecondarySection from './components/SecondarySection';
function App() {
  return (
    <div className="App">
      <Menu />
      <div className='box-container'>
        <ListaPrincipal />
        <SecondarySection />
      </div>
    </div>
  );
}

export default App;
