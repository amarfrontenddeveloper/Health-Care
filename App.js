
import './App.css';
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Header';
import Health from './components/Health';
import Medicine from './components/Medicine';
import Navbar from './components/Navbar';
import News from './components/News';

  
function App() {
  return (
    <>
 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='health' element={<Health/>}/>
      <Route path='medicine' element={<Medicine/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='client' element={<Client/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  );
}

export default App;
