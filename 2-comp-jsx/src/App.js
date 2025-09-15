import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline'>My Remix App</h1>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
