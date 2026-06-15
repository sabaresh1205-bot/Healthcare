import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Ophthalmology from "./components/specialistPage/Ophthalmology";
import Orthopaedics from "./components/specialistPage/Orthopaedics";
import Neurology from "./components/specialistPage/Neurology"
import Cardiology from "./components/specialistPage/Cardiology";
import Pediatrics from "./components/specialistPage/pediatrics";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ophthalmology" element={<Ophthalmology />} />
        <Route path="/orthopaedics" element={<Orthopaedics />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;