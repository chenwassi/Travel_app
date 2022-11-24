import './App.css';
import Login from './Pages/Login/Login';
import Mapage from './components/Login/MapPage/MapPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Main from './Pages/Main';
import AddPlace from './Pages/AddPlace/AddPlace';
import PlacePage from './Pages/PlacePage/PlacePage';
import AddComment from './Pages/AddComment/AddComment';
import HomePage from './Pages/HomePage/HomePage';
import HomeImage from './Pages/HomeImage/HomeImage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Login/>}></Route>
      <Route path='/HomePage' element={ <HomeImage/>}></Route>
      <Route path='/Home' element={<HomePage/>}></Route>
      <Route path='/Map/:lon/:lat' element={<Mapage/>}></Route>
      <Route path='/addPlace' element={<AddPlace/>}></Route>
      <Route path='/PlacePage' element={ <PlacePage/>}></Route>
      <Route path='/popup' element={ <AddComment/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
