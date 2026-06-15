import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Ophthalmology from "./components/specialistPage/Ophthalmology";
import Orthopaedics from "./components/specialistPage/Orthopaedics";
import Neurology from "./components/specialistPage/Neurology"
import Cardiology from "./components/specialistPage/Cardiology";
import Pediatrics from "./components/specialistPage/pediatrics";

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