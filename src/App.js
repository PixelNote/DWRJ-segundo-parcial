import './App.css';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import Meal from './pages/meal'
import { Routes, Route } from "react-router-dom";

function App() {
	return (
    <div className="App">
      <Navbar>
        <SearchBox />
      </Navbar>
      <Routes>
				<Route path='/' element={<Home />}/>
        <Route exact path='/meal/:id' element={<Meal/>}/>
      </Routes>
    </div>
  );
}

export default App;
