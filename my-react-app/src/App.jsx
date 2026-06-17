import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Ophthalmology from "./components/specialistPage/Ophthalmology";
import Orthopaedics from "./components/specialistPage/Orthopaedics";
import Neurology from "./components/specialistPage/Neurology"
import Cardiology from "./components/specialistPage/Cardiology";
import Pediatrics from "./components/specialistPage/pediatrics";
import {PieChart} from "recharts";
import {BarChart} from "recharts";
import Footer from "./components/Footer";
import Medical from "./components/specialistPage/Medical";



function App() {
  return(
    <div classNames="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard'  element={<Dashboard/>}> </Route>
          <Route path='/PieChart'  element={<PieChart/>}> </Route>
          <Route path='/BarChart'  element={<BarChart/>}> </Route>
          <Route path='/Footer'  element={<Footer/>}> </Route>
          <Route path="/" element={<Dashboard />} />
        <Route path="/ophthalmology" element={<Ophthalmology />} />
        <Route path="/orthopaedics" element={<Orthopaedics />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/medical" element={<Medical />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;