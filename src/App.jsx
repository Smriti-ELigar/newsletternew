import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap first
import './index.css';
import './App.css'; // Import your custom CSS last
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import Team from './components/Team';
import Editorials from './components/round2/Editorials';
import Festivals from './components/round2/Festivals';
import Lits from './components/round2/Lits';
import Evelyn from './components/round2/Evelyn';
import litsdata from "./data/litsdata.json"; // Import the JSON data
import Arts from './components/round2/Arts';
import Health from './components/round2/Health';
import Magical from './components/pages/creativity/Magical';
import magicaldata from "./data/magicaldata.json"; // Import the JSON data
import Tenni from './components/pages/sports/Tenni';
import tendata from "./data/tendata.json"; // Import the JSON data
import Entre from './components/pages/creativity/Entre';
import Diwali from './components/pages/culture/Diwali';
import Dussehra from './components/pages/culture/Dussehra';
import Ganesha from './components/pages/culture/Ganesha';
import Oct from './components/pages/culture/Oct';
import octdata from "./data/octdata.json"; // Import the JSON data
import Editor from './components/pages/editorial/Editor';
import MC from './components/pages/editorial/MC';
import Reflections from './components/pages/editorial/Reflections';
import Badminto from './components/pages/sports/Badminto';
import Blood from './components/pages/sports/Blood';
import baddata from "./data/baddata.json"; // Import the JSON data
import Fitnessh from './components/pages/sports/Fitnessh';
import mcdata from "./data/mcdata.json"; // Import the JSON data
import gandata from "./data/gandata.json"; // Import the JSON data
import entdata from "./data/entdata.json"; // Import the JSON data
import Helpline from './components/Helpline';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/team' element={<Team />} />
        <Route path='/helpline' element={<Helpline />} />

        <Route path='/editorials' element={<Editorials />} />
        <Route path='/festivals' element={<Festivals />} />
        <Route path='/arts' element={<Arts />} />
        <Route path='/lits' element={<Lits data={litsdata.slides} />} />
        <Route path='/evelyn' element={<Evelyn />} />
        <Route path='/health' element={<Health />} />
        {/* Pass the slides data to Magical component when routed */}
        <Route path='/magical' element={<Magical data={magicaldata.slides} />} />
        <Route path='/tenni' element={<Tenni data={tendata.slides} />} />
        <Route path='/entre' element={<Entre data={entdata.slides}/>} />
        <Route path='/diwali' element={<Diwali />} />
        <Route path='/dussehra' element={<Dussehra />} />
        <Route path='/ganesha' element={<Ganesha data={gandata.slides}/>} />
        <Route path='/oct' element={<Oct data={octdata.slides} />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/mc' element={<MC data={mcdata} />} />
        <Route path='/reflections' element={<Reflections />} />
        <Route path='/badminto' element={<Badminto data={baddata.slides} />} />
        <Route path='/fitnessh' element={<Fitnessh />} />
        <Route path='/blood' element={<Blood />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
