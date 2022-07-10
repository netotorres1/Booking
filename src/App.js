import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CarRentals from './components/CarRentals/CarRentals';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import List from './Pages/List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/carrentals/' element={<CarRentals/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
