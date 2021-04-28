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
        <div className="footer"> 
            
           <Container className="card1">
               <Row>
                   <Col md={3}>
                       <h4>A PROPOS</h4>
               {props.ft.map(el=>
<p>
{el.titre}
</p>
)}     
</Col>  

<Col md={3}>
<h4>COMMUNAUTÉ</h4>
                    {props.ft1.map(el =>
    <p>
{el.titre}
</p>
)}
</Col>

<Col md={3}>
<h4>HÔTE</h4>
                    {props.ft2.map(el =>
    <p>
{el.titre}
</p>
)}          
</Col>
<Col md={3}>         
<h4>ASSISTANCE</h4>
                    {props.ft3.map(el =>
    <p>
{el.titre}
</p>
)}
   </Col>
               </Row>
           </Container>
            <hr></hr>        
                       <p>© 2021 Airbnb, Inc.·Confidentialité·Conditions générales·Plan du site·Fonctionnement du site·Infos sur l'entreprise
</p>

                 
                  
             
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