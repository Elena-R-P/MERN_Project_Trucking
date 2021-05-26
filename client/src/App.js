import './App.css';
import AllUnits from './components/AllUnits';
import NewUnit from './components/NewUnit';
import {Router, Link} from '@reach/router'
import EditUnit from './components/EditUnit';
import TruckAnimation from './components/TruckAnimation';
import Img0 from '../src/images/Volvo-Semi-Truck.jpg';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Image = styled(motion.img)`
  width: 270px;
  height: 150px;
  border-radius: 50%;
  margin-right: 50px;
  border: 3px solid rgb(180, 148, 105);
`;



function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light my-sm-0">
        <div class="container-fluid d-flex justify-content-start">
          <Image
            src={Img0}
            alt="img0"
            drag={true}
          />
          {/* <img className="mainImg" src="https://www.tecequipment.com/app/uploads/2020/10/Volvo-Semi-Truck.jpg"/> */}
          <motion.h1 drag={true}>ERP Trucking Inc.</motion.h1>
          <Link className="btnNew" to="/new">New Unit</Link>
          <Link className="btnService" to="/service">Find Service</Link>
          <Link className="btnNew" to="/">Main Page</Link>
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
