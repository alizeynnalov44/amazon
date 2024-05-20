import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Details from './Pages/Details/Details';
import AddPage from './Pages/AddProducts';
import NotFound from './Pages/NotFound';
function App() {


  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/AddPage/:id" element={<AddPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
