import './App.css';
import {Archive, Home, Bin, Important} from './pages';
import { Routes, Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/archive' element = {<Archive />}/>
        <Route path='/important' element = {<Important />} />
        <Route path='/bin' element= {<Bin />} />
      </Routes>
    </div>
  );
}

export default App;
