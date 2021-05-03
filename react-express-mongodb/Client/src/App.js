import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './Component/Server/Form'
import Navbar from './Component/Nav/navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import GetData from './Component/GetData/GetData'
import Cr from './Component/ConditionalRendering/Cr'
import Cr2 from './Component/ConditionalRendering/cr2'
import Cr3 from './Component/ConditionalRendering/Cr3'
import Cr4 from './Component/ConditionalRendering/Cr4'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar />
   <Switch>
     <Route exact path="/" component={Form} />
     <Route exact path="/getData" component={GetData} />
     <Route  path="/service" />
   </Switch>
      </BrowserRouter> */}
      {/* <Cr1 />
      <Cr2 /> */}
    {/* <Cr3 /> */}
    <Cr4 />
    </div>
  );
}

export default App;
