import './App.css';
import Home from './Component/Home'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component = {Home}></Route>
      </Router>
    </div>
  );
}

export default App;
