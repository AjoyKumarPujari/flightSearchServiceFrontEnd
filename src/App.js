import { BrowserRouter as 
  Router, 
  Route, 
  Routes, 
   
} from 'react-router-dom';
//import Flight from './pages/flights/Flight';
import Home from "./pages/home/Home";
import List from './pages/list/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/List" element={<List/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;