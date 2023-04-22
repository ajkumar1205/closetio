import './App.css';
import SignUpPage from './pages/signup/SignUpPage';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LaunchPage from './pages/launch/LaunchPage';
import DashBoardPage from './pages/dash/DashBoardPage';
// import {AuthProvider} from './utils/UserProviderContext';
import Home from './pages/dash/Home';
import Closet from './pages/dash/closet/closet';
import Lookbook from './pages/dash/lookbook/lookbook';

function App() {
  return (
    <div className="App">
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path='/' element={<LaunchPage/>} />
          <Route path='/dashboard' element={<DashBoardPage/>} />
          {/* <Route path='/dashboard/' element={<Home/>} /> */}
         <Route path='/dashboard/closet' element={<Closet/>} />
          <Route path='/dashboard/lookbook' element={<Lookbook/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
        </Routes>
      {/* </AuthProvider> */}
    </Router>
    </div>
  );
}

export default App;
