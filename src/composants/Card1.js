import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const obj=[
  {titre:"tunis",
img:'https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240'},
  {titre:"klibia",
  img:'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'},
  {titre:"hamamett",
  img:'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240'},
  {titre:"hamamett sud",
  img:'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240'},
  {titre:"aghir",
  img:'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240'},
  {titre:"hergla",
  img:'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240'},
  {titre:"korba",
  img:'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240'},
  {titre:"marsa",
  img:'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'},
]

function Card1(props) {
  return (

 <Container className="card1">
<h2>Explorez les environs</h2>
<Row className="d-flex justify-content-between">
    {props.tt.map(el=>
<Card style={{width:'10rem'}}> 
<img src={el.img} />
<Card.Body >
  <Card.Title >{el.titre}</Card.Title>
  <Card.Text>
     </Card.Text>
</Card.Body>
</Card>
    )}
</Row>
</Container> 

  )}

  function Recherche(){
      return(
          <div>
              <Card1 tt={obj} />
             
          </div>
      )
  }

export default Recherche;
