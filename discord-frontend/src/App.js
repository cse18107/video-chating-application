import './App.css';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Navigate to='/dashboard'/> }/>
      </Routes>
    </BrowserRouter>
    <AlertNotification/>

    </>
  );
}

export default App;
