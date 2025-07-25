import NetflixNavbar from './components/NetflixNavbar'
import NetflixFooter from './components/NetflixFooter'
import NetflixMainHome from './components/NetflixMainHome'
import NetflixProfile from './components/NetflixProfile';
import NetflixSetting from './components/NetflixSetting';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <NetflixNavbar />
      {/* <NetflixMainHome/> */}
      <NetflixProfile />
      <NetflixSetting />
      <NetflixFooter />
    </>
  )
}

export default App
