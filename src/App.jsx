import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About />}/>
          <Route path='/skills' element= {<Skills/>}/>
          <Route path='/projects' element= {<Projects/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
