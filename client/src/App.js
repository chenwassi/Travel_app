import './App.css';
import Mapage from './components/Login/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route,Router,Routes} from 'react-router-dom'
import PlacePage from './Pages/PlacePage/PlacePage';
import AddComment from './Pages/AddComment/AddComment';
import HomePage from './Pages/HomePage/HomePage';
import HomeImage from './Pages/HomeImage/HomeImage';
import AllPlaces from './components/Login/AllPlaces/AllPlaces';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element= {<HomeImage/>}></Route>
      <Route path='/HomePage' element={ <HomePage/>}>
        <Route path='/HomePage/allData'element={<AllPlaces/>}></Route>
      </Route>
      <Route path='/Map/:lon/:lat' element={<Mapage/>}></Route>
      <Route path='/PlacePage' element={ <PlacePage/>}></Route>
      <Route path='/popup' element={ <AddComment/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
