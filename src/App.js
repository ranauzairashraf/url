import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Home } from './pages/Home';
import { History} from './pages/History';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
