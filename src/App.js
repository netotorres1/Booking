import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CarRentals from './components/CarRentals/CarRentals';
import Atractions from './Pages/Atractions/Atractions.jsx';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import List from './Pages/List/List';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/carrentals/' element={<CarRentals/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/atractions' element={<Atractions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
