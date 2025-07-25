import NetflixNavbar from './components/NetflixNavbar'
import NetflixFooter from './components/NetflixFooter'
import NetflixMainHome from './components/NetflixMainHome'
import NetflixProfile from './components/NetflixProfile';
import NetflixSetting from './components/NetflixSetting';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <NetflixNavbar user = {userObj}  />
       <NetflixMainHome/> 
      <NetflixProfile user = {userObj} />
      <NetflixSetting user = {userObj} />
      <NetflixFooter user = {userObj} />
    </>
  )
}

export default App
