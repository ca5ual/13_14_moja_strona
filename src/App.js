
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Video from './pages/Video';
import Photo from './pages/Photo';
import Signup from './pages/Signup';

function App() {
let component;
// eslint-disable-next-line default-case
switch (window.location.pathname) {
  case "/home":
    component = <Home />
 break
 case "/pricing":
  component = <Pricing />
break
case "/about":
  component = <About />
  break
  case "/photo":
    component = <Photo />
    break
  case "/video":
    component = <Video />
    break
    case "/sign":
    component = <Signup />
    break
}
  
return( 
  <> 
    <Navbar/>
    <div className ="container">
    {component}
    </div>
    
  
  </>
  )
}
export default App;
