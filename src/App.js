import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import { themeContext } from './context/ThemeContext'
import React, {useContext} from 'react'
import img1 from './images/themeIco.png'
import NotFound from './pages/NotFound';


function App() {
  const {theme,changeTheme} = useContext(themeContext)

  return <div className={theme?'main__dark':'main__light'}>
    
    <header className='header'>
      <h1 className='header__titulo'>
        <a href='/'>Pelireviews</a>
      </h1>
      <div className='theme__ico--div'>
        <img className='theme__ico' onClick={()=>{changeTheme()}} src={img1} alt=''></img>
      </div>
    </header>
   
    <main>
      <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/details/:id" element={<Details/>}/>
            </Routes>
          </BrowserRouter>
    </main>

    <a href='/' className='boton__inicio--a'>▲</a>
    <footer className='footer'></footer>
  </div>
}

export default App;