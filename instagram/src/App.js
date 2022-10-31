import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound';
import Mobile from './components/mobile/Mobile'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile/*' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Mobile/>
    </div>
  );
}

export default App;
