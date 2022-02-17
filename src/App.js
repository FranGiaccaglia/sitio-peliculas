import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import { themeContext } from './context/ThemeContext'
import React, {useContext} from 'react'
import img1 from './images/themeIco.png'
import NotFound from './pages/NotFound';
import Login from './pages/Login';


function App() {
  const {theme,changeTheme} = useContext(themeContext)

  return <div className={theme?'main__dark':'main__light'}>
    
    <header className='header'>
      <h1 className='header__titulo'>
        <a href='/'>Pelireviews</a>
      </h1>
      <h2 className='header__login'>
        <a href='/login'>Login</a>
      </h2>
      <div className='theme__ico--div'>
        <img className='theme__ico' onClick={()=>{changeTheme()}} src={img1} alt=''></img>
      </div>
    </header>
   
    <main>
      <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/details/:id" element={<Details/>}/>
            </Routes>
          </BrowserRouter>
    </main>

    <a href='/' className='boton__inicio--a'>inicio ꜛ</a>
    <footer className='footer'></footer>
  </div>
}

export default App;
