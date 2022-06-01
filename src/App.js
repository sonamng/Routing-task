
import './App.css'
import { BrowserRouter,Routes ,Route ,Link} from "react-router-dom";
import Home from "./component/Home";
import Contect from './component/Contect'
import Project from './component/Project'
function App() {
  return (
    <div className="App">
       <h1 className='heading'>* ROUTER IN REACT *</h1>

      <BrowserRouter>
      <div className='All'>

      <Link className='LinkAps'  to="/Home" >Home</Link>
      <Link className='LinkApp' to="/Contect" >Contect</Link>
      <Link className='LinkApps'  to="/Project" >Project</Link>

      </div>

     

    <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contect" element={<Contect/>} />
        <Route path="/Project" element={<Project/>} />

    </Routes>
    
      </BrowserRouter>

    </div>
  );
}
export default App;