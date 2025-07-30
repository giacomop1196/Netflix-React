import NetflixNavbar from './components/NetflixNavbar'
import NetflixFooter from './components/NetflixFooter'
import NetflixMainHome from './components/NetflixMainHome'
import NetflixProfile from './components/NetflixProfile';
import NetflixSetting from './components/NetflixSetting';
import NetflixTvShow from './components/NetflixTvShow';
import NetflixMovieDetails from './components/NetflixMovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import avatarImg from '/img/avatar.png'

function App() {

  // Ho creato un oggetto che contiene i dati dell'utente
  // Passo i dati nelle props per farli visualizzare nei componenti
  const userObj = {
    email: 'exemple@gmail.com',
    name: 'Giacomo',
    surname: 'Pillitteri',
    phone_number: 3210441279,
    profile_photo: avatarImg
  };

  return (
    <>
      <BrowserRouter>

        {/*  NAVBAR   */}
        <NetflixNavbar user={userObj} />

        <Routes>

          {/*  MAIN HOME   */}
          {/*  La scrollbar è nascosta dal css per una questione stilistica. Gli elementi si possono scorrere con il touchpad */}
          <Route path="/" element={<NetflixMainHome />} />

          {/*  TV-SHOW   */}
          <Route path='/tv-show' element={<NetflixTvShow />} />

          {/*  MOVIE-DETAIL   */}
          <Route path='/detail/:movieid' element={<NetflixMovieDetails />} />

          {/*  PROFILE PAGE   */}
          <Route path="/user" element={<NetflixProfile user={userObj} />} />

          {/*  SETTING PAGE   */}
          <Route path="/setting" element={<NetflixSetting user={userObj} />} />

        </Routes>

        {/*  FOOTER   */}
        <NetflixFooter user={userObj} />
      </BrowserRouter>
    </>
  )
}

export default App
