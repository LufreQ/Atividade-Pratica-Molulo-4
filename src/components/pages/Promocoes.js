import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap'

import './Promocoes.module.css'
import rio from '../../img/rio.jpg'
import sp from '../../img/sp.jpg'
import bh from '../../img/bh.jpg'
import porto from '../../img/portoalegre.jpg'

function Promocoes() {
    return(
        <div className='formcard'>
        <Row xs={4} md={4} lg={4}>
        <Card style={{ width:"600px" }}>
        <Card.Img variant="top" src={rio} />
        <Card.Body>
          <Card.Title><h3>Rio De Janeiro</h3></Card.Title>
          <Card.Text>
          <h6>Viaje já para O Rio De Janeiro</h6>
            <p>De: <s>7650.00 R$</s></p>
            <p>Por: 6470.00 R$</p>
          </Card.Text>
          <Button variant="danger"><a href='Conf'>Agendar</a></Button>
        </Card.Body>
      </Card>

    <Card style={{ width: '600px'}}>
    <Card.Img variant="top" src={sp} />
    <Card.Body>
        <Card.Title><h3>São Paulo</h3></Card.Title>
        <Card.Text>
        <h6>Viaje já para São Paulo</h6>
            <p>De: <s>5650.00 R$</s></p>
            <p>Por: 3970.00 R$</p>
        </Card.Text>
        <Button variant="danger"><a href='Conf'>Agendar</a></Button>
    </Card.Body>
    </Card>
    
    
    <Card style={{ width: '600px' }}>
    <Card.Img variant="top" src={bh} />
    <Card.Body>
        <Card.Title><h3>Belo Horizonte</h3></Card.Title>
        <Card.Text>
        <h6>Viaje já para Belo Horizonte</h6>
            <p>De: <s>4625.00 R$</s></p>
            <p>Por: 3421.00 R$</p>
        </Card.Text>
        <Button variant="danger"><a href='Conf'>Agendar</a></Button>
    </Card.Body>
    </Card>
    
    <Card style={{ width: '600px' }}>
    <Card.Img variant="top" src={porto} />
    <Card.Body>
        <Card.Title><h3>Porto Alegre</h3></Card.Title>
        <Card.Text>
            <h6>Viaje já para Porto Alegre</h6>
            <p>De: <s>4987.00 R$</s></p>
            <p>Por: 3329.00 R$</p>
            
        </Card.Text>
        <Button variant="danger"><a href='Conf'>Agendar</a></Button>
    </Card.Body>
    </Card>
    
    </Row>
    </div>
    )
}

export default Promocoes