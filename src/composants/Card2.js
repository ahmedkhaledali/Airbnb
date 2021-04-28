import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj1=[
  {titre:"Escapades en pleine nature",
img:'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320'},
  {titre:"Des logements uniques",
  img:'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320'},
  {titre:"Logements entiers",
  img:'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'},
  {titre:"Animaux de compagnie acceptés",
  img:'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320'},
]

function Card2(props) {
  return (
  
        
<Container  className="card1">
<h2>Chez vous, partout</h2>

<Row className="d-flex justify-content-between">
    {props.tt1.map(el=>

<Card style={{border:'none' }}>
<Card.Img variant="top" src={el.img} className="card-img"/>
<Card.Body>
  <Card.Title className=" card-txt">{el.titre}</Card.Title>
  <Card.Text>
     </Card.Text>
</Card.Body>
</Card>

    )}

</Row>
</Container>

    
  )}

  function Recherche1(){
      return(
          <div>
              <Card2 tt1={obj1} />
             
          </div>
      )
  }

export default Recherche1;
