import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj=[
  {titre:"tunis",
img:'./composants/images/tunis.jpg'},
  {titre:"klibia",
  img:'./images/kilibia.jpg'},
  {titre:"hamamett",
  img:'./images/hamamett.jpg'},
  {titre:"hamamett sud",
  img:'./images/hamamettSud.jpg'},
  {titre:"aghir",
  img:'./images/aghir.jpg'},
  {titre:"hergla",
  img:'./images/hergla.jpg'},
  {titre:"korba",
  img:'./images/hergla.jpg'},
  {titre:"marsa",
  img:'./images/marsa.jpg'},
]

function Card1(props) {
  return (
    <div>
        <h1>Explorez les environs</h1>
<Container>
<Row className="d-flex justify-content-between">
    {props.tt.map(el=>

<Card style={{ width: '10rem' }}>
<Card.Img variant="top" src={el.img} />
<Card.Body>
  <Card.Title> {el.titre} </Card.Title>
  <Card.Text>
     </Card.Text>
</Card.Body>
</Card>

    )}

</Row>
</Container>

    </div>
  )}

  function Recherche(){
      return(
          <div>
              <Card1 tt={obj} />
             
          </div>
      )
  }

export default Recherche;
