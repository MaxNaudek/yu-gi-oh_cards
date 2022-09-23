/**
 * This function returns a JSX that triggers a conditional rendering of two components, Cards and ListView.
 * The component ButtonView triggers an event that is received from CardsLogic component and CardsInfo renders the information.
 */


import { Row, Col }from 'react-bootstrap/';
import Cards from './Cards'
import ListsView from './ListsView'

function CardsInfo({allCards, toggle}) {

  return (
    <Row >
      {allCards.map((e)=>{
        return (
          <Col className="d-flex justify-content-center" sm={3} key={e.id} style={{marginTop: '2rem', marginBottom:'2rem'}}> 
          { toggle ?  <Cards info={e}/> : <ListsView info={e}/>}
          </Col>  
          )     
        }
      )}
    </Row >
  )

}

export default CardsInfo
