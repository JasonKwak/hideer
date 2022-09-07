import styled from 'styled-components';
import {Navbar} from '../components/Navigation';
import {ImgDiv} from '../components/Images'
import Home from './home/Home';
import Campfire from './campfire/Campfire';
import Faq from './faq/Faq';
import Gallery from './gallery/Gallery';
import Identity from './identity/Identity';

function App () {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/campfire":
      component = <Campfire/>
      break
    case "/identity":
      component = <Identity/>
      break  
    case "/faq":
      component = <Faq/>
      break       
    case "/gallery":
      component = <Gallery/>
      break 
  }
  return (
    <>
    <Navbar></Navbar>
    {component}
    </>
  )
}
export default App

