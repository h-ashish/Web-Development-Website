import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import './styles/styles.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={Aboutme}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
