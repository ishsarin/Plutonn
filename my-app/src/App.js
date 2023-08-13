import './App.scss';
// import "./style.scss"
import { Navbar } from './components/Navbar';
import {Main} from "./components/Main"
function App() {
  const app = document.querySelector(".App")
  

  return (
    <div className="App">
      <Navbar app = {app}/>
      <Main/>
    </div>
  );
}

export default App;
