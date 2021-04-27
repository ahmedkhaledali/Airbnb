import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj2=[{
    titre:"Escapades en pleine nature",
    img:'./images/img1.jpg'},

      {titre:"Des logements uniques",
      img:'./images/img2.jpg'},

      {titre:"Logements entiers",
      img:'./images/img3.jpg'},

      {titre:"Animaux de compagnie acceptés",
      img:'./images/img4.jpg'},
    ]

function Card3(props){
    return(
        <div>
            <h1>Découvrez les expériences</h1>
            <h2>Des activités uniques avec des experts locaux, en personne ou en ligne.</h2>
            

    
<Container>
<Row className="d-flex justify-content-between">

{props.tt2.map(el=>

<Card style={{ width: '18rem' }}>
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
    )
}

function Recherche2(){
    return(
        <div>
            < Card3 tt2={obj2} />
        </div>
    )
}

export default Recherche2;