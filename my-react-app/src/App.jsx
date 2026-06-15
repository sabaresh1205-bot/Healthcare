import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import {PieChart} from "recharts";
import {BarChart} from "recharts";
import Footer from "./components/Footer";
function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard'  element={<Dashboard/>}> </Route>
          <Route path='/PieChart'  element={<PieChart/>}> </Route>
          <Route path='/BarChart'  element={<BarChart/>}> </Route>
          <Route path='/Footer'  element={<Footer/>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  )
 }
 export default App;