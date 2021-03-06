import './App.css';
import Home from './components/Home'
import LoginSignUp from './components/LoginSignUp'
import AuthProvider from './contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SecureRoute from './components/SecureRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="loginsignup" element={<LoginSignUp />} />
            <Route path="dashboard" element={
              <SecureRoute>
                <Dashboard />
              </SecureRoute>
            } />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
