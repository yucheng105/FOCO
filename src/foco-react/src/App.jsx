import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './components/HomePage';
import AddMission from './components/AddMission';
import Farm from './components/Farm';
import FocusTimer from './components/FocusTimer';
import MissionContent from './components/MissionContent';
import MissionList from './components/MissionList';
import Rewards from './components/Rewards';
import Stats from './components/Stats';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-mission" element={<AddMission />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/focus-timer" element={<FocusTimer />} />
          <Route path="/mission-list" element={<MissionList />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/mission-content" element={<MissionContent />} />
        </Routes>
      </div>
    </Router>
  );
}

// const App = () => {
//     const renderPage = () => {
//         const pathname = window.location.pathname;
//         const urlParams = new URLSearchParams(window.location.search);

//         if (pathname.includes('Add_Mission.html')) {
//             return <AddMission />;
//         }
//         if (pathname.includes('Farm.html')) {
//             return <Farm />;
//         }
//         if (pathname.includes('Focus_Timer.html')) {
//             return <FocusTimer />;
//         }
//         if (pathname.includes('Mission_Content.html')) {
//             return <MissionContent />;
//         }
//         if (pathname.includes('Mission_List.html')) {
//             return <MissionList />;
//         }
//         if (pathname.includes('Rewards.html')) {
//             return <Rewards />;
//         }
//         if (pathname.includes('Stats.html')) {
//             return <Stats />;
//         }
//         return <HomePage />;
//     };

//     return (
//         <div className="App">
//             {renderPage()}
//         </div>
//     );
// }

export default App;
