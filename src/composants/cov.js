import '../composants/Style.css';
import 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Covv from "./images/bg.jpg";

function Cov(){
    return(
        <div>
<Image src={Covv} fluid />
        </div>
    )
}
export default Cov;