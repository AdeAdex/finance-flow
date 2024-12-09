import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';
import Tokens from './Pages/Tokens.jsx';


function App() {
  

  return (
    <>
      <Navbar />
      <div className="bg-transparent block h-[73px] lg:h-[92px] " ></div>

      {/* Routes to other pages */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tokens' element={<Tokens/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>

      <Footer />


    </>
  )
}

export default App
