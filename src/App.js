import './App.css';
import SignUpPage from './pages/signup/SignUpPage';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LaunchPage from './pages/launch/LaunchPage';
import DashBoardPage from './pages/dash/DashBoardPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<LaunchPage/>} />
        <Route path='/dashboard' element={<DashBoardPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
