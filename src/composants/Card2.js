import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj1=[
  {titre:"Escapades en pleine nature",
img:'./images/img1.jpg'},
  {titre:"Des logements uniques",
  img:'./images/img2.jpg'},
  {titre:"Logements entiers",
  img:'./images/img3.jpg'},
  {titre:"Animaux de compagnie acceptés",
  img:'./images/img4.jpg'},
]

function Card2(props) {
  return (
    <div>
        <h1>Chez vous, partout</h1>
<Container>
<Row className="d-flex justify-content-between">
    {props.tt1.map(el=>

<Card style={{ width: '10rem' }}>
<Card.Img variant="top" src={el.img} />
<Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>
  {el.titre} 
     </Card.Text>
</Card.Body>
</Card>

    )}

</Row>
</Container>

    </div>
  )}

  function Recherche1(){
      return(
          <div>
              <Card2 tt1={obj1} />
             
          </div>
      )
  }

export default Recherche1;
