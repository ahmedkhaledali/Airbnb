import '../composants/Style.css';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import  Logo  from './images/logo11.png';




function Navbare(){
    return(
        <div className="bg-nav">
            <Navbar>
  <Navbar.Brand href="#home"><img src={Logo} style={ {width:'100px', height:'50px'}} /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="ml-auto">
    <a href="#login">Devenez hôte <ion-icon name="globe-outline"></ion-icon>
</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbare