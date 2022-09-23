/**
 * This function returns a JSX component that produces a card with the sent prop from the component CardsInfo. 
 * The data received includes an image, a name, a description with properties as price, and a type.
 * */
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap/';
import '../App.css';

function Cards({info}) {
  return (
<Container>
    <Card className='viewCard' style={{ width: '16rem' }}>
      <Card.Img variant="top" src={info.card_images[0].image_url} alt={info.name} />
      <Row>
        <Col>
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <Card.Text>
          {info.desc}
          </Card.Text>
        </Card.Body>
        </Col>
      </Row>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {info.type}</ListGroup.Item>
        <ListGroup.Item>Price ${info.card_prices[0].tcgplayer_price}</ListGroup.Item>
      </ListGroup> 
    </Card>
  </Container>

  )
}

export default Cards