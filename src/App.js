import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import data from './Data';
import Home from './components/Home';
import Footer from './components/footer';
import Contact from './components/contact';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/projects' element={data.map((e)=>{
            return(
                <Cards
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    GitHub={e.Github}
                    Hosted={e.Hosted}
                    Image={e.image}
                />
            )
        })}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
