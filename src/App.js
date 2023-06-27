import './App.css';
import { Home } from './components/Home/Home';
import { Archive } from './components/Archive/Archive';
import { Bin } from './components/Bin/Bin';
import { Routes, Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/archive' element = {<Archive />}/>
        <Route path='/bin' element= {<Bin />} />
      </Routes>
    </div>
  );
}

export default App;
