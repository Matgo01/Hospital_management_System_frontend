
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import './App.css';

import Home from "./components/Home";
import PatientView from "./components/patients/PatientView";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatient from "./components/patients/AddPatient";
import EditPatient from "./components/patients/EditPatient";
import PatientProfile from "./components/patients/PatientProfile";

function App() {
  return(
    <main className="container mt-5">
      <Router>
        <Navbar/>
        <Routes>
          <Route exac path='/' element={<Home/>}/>
          <Route exac path='/view-patients' element={<PatientView/>}/>
          <Route exac path='/add-patient' element={<AddPatient/>}/>
          <Route exact path='/edit-patients/:id' element={<EditPatient/>}/>
          <Route exac path='/patient-profile/:id' element={<PatientProfile/>}/>
        </Routes>
      </Router>
    </main>
    
  );
}

export default App;
