import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj2=[{
    titre:"Collection à la une : Envies d'évasion",
    titre1:"Voyagez depuis chez vous grâce aux expériences en ligne.",
    img:'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320'},

      {titre:"Expériences en ligne",
      titre1:"Activités interactives en direct, animées par des hôtes.",
      img:'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320'},

      {titre:"Expériences",
      titre1:"Prenez part à des activités locales, où que vous soyez.",
      img:'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320'},

     
    ]

function Card3(props){
    return(
        <div className="card1">
            
            
<Container >
<h1>Découvrez les expériences</h1>
            <h2>Des activités uniques avec des experts locaux, en personne ou en ligne.</h2>
<Row className="d-flex justify-content-between">

{props.tt2.map(el=>

<Card style={{ width: '18rem',border:'none' }}>
    <Card.Img className="card-img" variant="top" src={el.img} />
    <Card.Body>
      <Card.Title> {el.titre}</Card.Title>
      <Card.Text>
     {el.titre1}
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