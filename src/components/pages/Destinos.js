import rio from '../../img/rio.jpg'
import sp from '../../img/sp.jpg'
import bh from '../../img/bh.jpg'
import porto from '../../img/portoalegre.jpg'


import './Destinos.module.css'

import { Button, Card, Col, Row } from 'react-bootstrap'

function Destinos() {
    return (

    <Row xs={2} md={2} lg={2}>
 
    <Col>
      <Card>
        <Card.Img variant="top" src={rio} />
        <Card.Body>
          <Card.Title>Rio De Janeiro</Card.Title>
          <Card.Text>
          O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.
          </Card.Text>
          <button className='btn btn-outline-info'><a href='https://www.youtube.com/watch?v=JUksXGGy0_s'>Saiba Mais</a></button> 
        </Card.Body>
        
      </Card>

    </Col>
      
    <Col>

      <Card>
        <Card.Img variant="top" src={sp} />
        <Card.Body>
          <Card.Title>São Paulo</Card.Title>
          <Card.Text>
          São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer.
          </Card.Text>
          <button className='btn btn-outline-info'><a href='https://www.youtube.com/watch?v=pERkulPr9MA'>Saiba Mais</a></button>
        </Card.Body>
      </Card>

    </Col>

    <Col>


      <Card>
        <Card.Img variant="right" src={bh} />
        <Card.Body>
          <Card.Title>Belo Horizonte</Card.Title>
          <Card.Text>
          Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer.
          </Card.Text>
          <button className='btn btn-outline-info'><a href='https://www.youtube.com/watch?v=KbgdEQzBQrM'>Saiba Mais</a></button>
        </Card.Body>
      </Card>


    </Col>

    <Col>


      <Card>
        <Card.Img variant="right" src={porto} />
        <Card.Body>
          <Card.Title>Porto Alegre</Card.Title>
          <Card.Text>
          Porto Alegre é a capital do estado de Rio Grande do Sul, no sul do Brasil. Na praça principal, a Praça Marechal Deodoro, encontra-se a Catedral Metropolitana, de estilo renascentista, com murais religiosos no exterior. O Palácio Piratini, de estilo neoclássico, é a sede do governo estadual. O Theatro São Pedro, do século XIX, fica nas proximidades. A cidade é conhecida como uma porta de entrada para os enormes desfiladeiros do Parque Nacional de Aparados da Serra.
          </Card.Text>
          <button className='btn btn-outline-info'><a href='https://www.youtube.com/watch?v=cz4tCdlFtzE'>Saiba Mais</a></button>
        </Card.Body>
      </Card>


    </Col>
    
  
    </Row>
    )
}

export default Destinos