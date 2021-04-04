
import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/mdbootstrap/css/bootstrap.css'
import NavComp from '../src/Components/NavComp/NavComp'
import Card from '../src/Components/Card/card'
import StateComp from '../src/Components/StateComp/StateComp'





function App() {
  return (
    <div className="App">
     
    <NavComp />
      <div className="container">
        {/* <div className="row">
          <div className="col-sm-3">
            <Card title="React Js" footer="A2N"  image="https://images.pexels.com/photos/3009755/pexels-photo-3009755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
          <div className="col-sm-3">
            <Card title="Angular"  footer="A2z" image="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          </div>
          <div className="col-sm-3">
            <Card title="Javascript" footer="A2s" image="" />
          </div>
          <div className="col-sm-3">
            <Card title="Viu Js" footer="A2C" />
          </div>
         
        </div> */}
          <div className="row">
            <StateComp name="Zoya" city="Pune" />
            
          </div>
      </div>
    
    </div>
  );
}

export default App;
