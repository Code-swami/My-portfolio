import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Blog /> */}
    {/* <Contact /> */}
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/blog' component={Blog} />
    {/* <Route exact path='/portfolio' component={Portfolio} /> */}
    <Route exact path='/contact' component={Contact} />
    </Switch>



    </>
  );
}

export default App;
