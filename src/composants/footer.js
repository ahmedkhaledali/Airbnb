import '../composants/Style.css';
import 'react-bootstrap';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const propos=[
    {
        titre:"Fonctionnement d'Airbnb"
    },

    {
        titre:"Newsroom"
    },

    {
        titre:"Investisseurs"
    },
    {
        titre:"Airbnb Plus"
    },
    {
        titre:"Airbnb Luxe"
    },
    {
        titre:"HotelTonight"
 
   },
   {
    titre:"Airbnb for Work"
},
{
    titre:"C'est possible, grâce aux hôtes"
},
{
    titre:"Carrières"
},
{
    titre:"Lettre des fondateurs"
}
]

const communuate=[
    {
titre:"Diversité et intégration"
    },
    {
        titre:"Accessibilité"
            },
            {
                titre:"Partenaires Airbnb"
                    },
                    {
                        titre:"Logements d'urgence"
                            },
                            {
                                titre:"Parrainage de voyageurs"
                                    },
                                    {
                                        titre:"Airbnb.org"
                                            },
]

const hote=[
    {
    titre:"Héberger des voyageurs"
},
{
    titre:"Organiser une expérience en ligne"
},
{
    titre:"Organiser une expérience"
},
{
    titre:"Accueil responsable"
},
{
    titre:"Centre de ressources"
},
{
    titre:"Community Center"
},
]

const assistant=[
    {
        titre:"Nos mesures face au COVID-19"
    },

    {
        titre:"Centre d'aide"
    },

    {
        titre:"Options d'annulation"
    },

    {
        titre:"Service d'aide aux voisins"
    },

    {
        titre:"Confiance et sécurité"
    }
]
function Footer(props){
    return(
        <div>
           <Container>
               <Row>
                   <Col md={3}>
               {props.ft.map(el=>
<ul> 
<li>{el.titre}</li>
</ul>
)}     
</Col>  

<Col md={3}>
                    {props.ft1.map(el =>
    <ul>
<li>{el.titre}</li>
</ul>
)}
</Col>

<Col md={3}>
                    {props.ft2.map(el =>
    <ul>
<li>{el.titre}</li>
</ul>
)}          
</Col>
<Col md={3}>         
                    {props.ft3.map(el =>
    <ul>
<li>{el.titre}</li>
</ul>
)}
   </Col>
               </Row>
           </Container>
                    
                       

                 
                  
             
        </div>
    )
}


function Recherche3(){
    return(
        <div>
            < Footer ft={ propos} ft1={communuate} ft2={hote} ft3={assistant}  />
           
        </div>
    )
}

export default Recherche3;