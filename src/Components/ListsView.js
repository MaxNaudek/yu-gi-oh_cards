/**
 * This function returns a JSX component that produces a list of information with the sent prop from the component CardsInfo. 
 * The data received includes a name and description with properties as price, and a type.
 */
import ListGroup from 'react-bootstrap/ListGroup';

function ListsView({info}) {
  return (
    <ListGroup variant="flush" className="text-center fs-6 text " style={{border: '1px solid black'}}>
        <ListGroup.Item variant="info">Name: {info.name}</ListGroup.Item>
        <ListGroup.Item>Description: {info.desc}</ListGroup.Item>
        <ListGroup.Item>Type: {info.type}</ListGroup.Item>
        <ListGroup.Item>Price ${info.card_prices[0].tcgplayer_price}</ListGroup.Item>
    </ListGroup>
  )
}

export default ListsView