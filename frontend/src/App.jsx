import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import { Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';

export default function App() {
  return (
    <div className="">
      
      <Navbar />

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/signup" element={< SignUpPage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/settings" element={< SettingsPage />} />
        <Route path="/profile" element={< ProfilePage />} />
      </Routes>


    </div>
  )
}
