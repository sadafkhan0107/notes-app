import './App.css';
import { Home } from './components/Home/Home';
import { Archive } from './components/Archive/Archive';
import { Routes, Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/archive' element = {<Archive />}/>
      </Routes>
    </div>
  );
}

export default App;
