import LoginPage from './pages/login';
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
