import { Route, Routes } from 'react-router-dom';
import './App.css'
import LayOut from './components/LayOut';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {

  return (
    <>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
