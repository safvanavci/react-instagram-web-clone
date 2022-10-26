import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
