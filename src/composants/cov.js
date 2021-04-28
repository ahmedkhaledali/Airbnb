import '../composants/Style.css';
import 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Covv from "./images/cov1.webp";
import { Container,Row,Button,Col } from 'react-bootstrap';

function Cov(){
    return(
        <div className="card1">
            <Container className="cov">
<Row className="text">
    <Col md={7}>
<h1>Devenez hôte</h1>
<h3>Gagnez un revenu complémentaire
    et saisissez de nouvelles opportunités 
    en louant votre logement.</h3>
    <Button variant="light">En savoir plus</Button>
    </Col>
</Row>
            </Container>

        </div>
    )
}
export default Cov;