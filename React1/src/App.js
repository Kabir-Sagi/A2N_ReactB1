
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import FormComp from './Componets/Forms/form'
// import Form2Comp1 from './Componets/Form2/index'
// import FormChange from './Componets/FormChange/FormChange'
import AxiosComp from './Componets/Axios/AxiosComp'
import Home from './Componets/Home/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ReactJs from './Componets/React/React'
import Angular from './Componets/Angular/Angular'
import BigData from './Componets/BigData/BigData'
// import Parent from './Componets/Parent-Child/Parent'
import Parent from './Componets/Child-Parent/Parent'
import Count from  './Componets/Count/count'
import A from './Componets/Context/A'
import GetData from './Componets/Context-2/GetData'
import Mounting from './Componets/LifecycleMEthods/Mounting'
import Updating from './Componets/LifecycleMEthods/UpdatingPhase'

function App() {
  return (
    // <div className="App">
    //   <div className="container mt-3">
    //     <div className="row">
    //         <div className="col-sm-4"></div>
    //       <div className="col-sm-4">
          // {/* <FormComp />
          // <Form2Comp1 /> */}
          //  {/* <FormChange /> */}
        
    //       </div>
      
    //     </div>
    //   </div>
    
    // </div>
         <div className="App">
        {/* <AxiosComp /> */}
        {/* <BrowserRouter>
        <Home />
        <Switch> */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/react" component={ReactJs} />
        <Route path="/angular" component={Angular} />
        <Route path="/bigdata" component={BigData} />
        </Switch> */}
        

        {/* </BrowserRouter> */}
        {/* <Parent /> */}
        {/* <Count /> */}
        {/* <A /> */}
        {/* <GetData /> */}
        {/* <Mounting /> */}
        <Updating />
         </div>
  );
}

export default App;
