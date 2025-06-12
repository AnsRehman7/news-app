import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import All from './pages/All';
import Business from './pages/Business';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Health from './pages/Health';
import './App.css'
import Buttons from './components/Buttons';
import Pakistan from './pages/Pakistan';
import India from './pages/India';
import England from './pages/England';
import America from './pages/America';
import Europe from './pages/Europe';
function App() {
  return (
    <Router>
      <Header/>
      <Buttons/>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/health" element={<Health />} />
        <Route path="/pakistan" element={<Pakistan/>} />
        <Route path='/india' element={<India/>} />
        <Route path='/england' element={<England/>}/>
        <Route path='/america' element={<America/>} />
        <Route path='/europe' element={<Europe/>} />
      </Routes> 
    </Router>
  );
}

export default App;
