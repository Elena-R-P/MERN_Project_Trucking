import './App.css';
import AllUnits from './components/AllUnits';
import NewUnit from './components/NewUnit';
import {Router, Link} from '@reach/router'
import EditUnit from './components/EditUnit';
import TruckAnimation from './components/TruckAnimation';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light my-sm-0">
        <div class="container-fluid d-flex justify-content-start">
          <img className="mainImg" src="https://www.tecequipment.com/app/uploads/2020/10/Volvo-Semi-Truck.jpg"/>
          <h1>ERP Trucking Inc.</h1>
          <button className="btnNew"><Link to="/new">New Unit</Link></button>
          <button className="btnService"><Link to="/service">Find Service</Link></button>
          <button className="btnNew"><Link to="/">Main Page</Link></button>
        </div>
      </nav>
      
      <Router>
        <AllUnits path="/"></AllUnits>
        <NewUnit path="/new"></NewUnit>
        <EditUnit path="/units/update/:id"></EditUnit>
        <TruckAnimation path="/service"></TruckAnimation>
      </Router>

      
    </div>
  );
}

export default App;
