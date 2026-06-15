import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
 function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard'  element={<Dashboard/>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  )
 }
 export default App;