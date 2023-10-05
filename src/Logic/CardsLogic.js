/**
 * This component contains all the logic that is distributed along the comunication process from other components.
 * It also renders the information that is assambled together in a JSX.
 */
import { useEffect, useState } from 'react';
import { Container, Pagination, Row } from 'react-bootstrap/';
import ButtonView from '../Components/ButtonView';
import CardsInfo from '../Components/CardsInfo';
import ErrorMessage from '../Components/ErrorMessage';
import HeaderYugi from '../Components/HeaderYugi';
import NumberComponent from '../Components/NumberComponent';
import Paginations from '../Components/Pagination';

function CardsLogic() {
   
  const [cards, setCards]= useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [itemsperPage, setitemsperPage]= useState(10)
  const [messageError, setMessageError]= useState()
  const [toggleCards, setToggleCards]= useState(true)

  /**
   * This function returns the value of the input form that is contained in NumberComponent.
   * If the value from that input is not a letter or is 0 prevents an error and returns 1 item.
   * Also if the number is above 50 prevents a heavy rendering and only renders 50. 
   */
  const handleInputChange =(event) => {
    setitemsperPage(event.target.value)
    if (!Number(event.target.value) || event.target.value === 0) {
    setitemsperPage((e)=>e+1);
     } 

    if (event.target.value > 50) { 
      setitemsperPage(()=>50);
      setMessageError(()=> 'Please avoid numbers above 50 👁️')} else {setMessageError(()=>"")}
  }
  
  /**
  *This function returns a toggle of a value that is false and true when it is triggered by the ButtonView component. 
  */

  function handleCardsView(){
    setToggleCards(!toggleCards) 
  
  }   
  /**
   * The array paginationItems and the for come from React-bootsrap. 
   * They generate a Pagination component based in the length of the numbers that are passed inside the for.
   * The function inside the event onclick returns a value equal to the page that is targeted inside the Pagination component.
   * Stores that value in a state and also triggers the function callCards.
   */

  const paginationItems = [];
      for (let number = 0; number <= 10; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === pageNumber} onClick={() => handlePageNumber(number)}>
          {number}    
        </Pagination.Item>
      );
    }
  /**
   * The variable urlApi stores an API direction.
   * It is dynamically transformed with two states, the items stored by the function handleInputChange and function handlePageNumber.
   * Those values allow obtaining the right items from a number of cards and their respective offset value inside the API.
   */

    const urlApi=`https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=${itemsperPage}&offset=${itemsperPage*pageNumber}&view=List`
   
   /**
    * This function makes a fetch to the API stored in urlApi about a fabulous and popular magic card game. 
    * The data is stored in a state and it is used by the cardInfo Component.
    */
    function callCards() {
      fetch(urlApi)
          .then(response => response.json())
          .then(data=> { 
          setCards(data.data)
          })
      }
      
    const handlePageNumber = (number) =>{
          setPageNumber(number)
          callCards()
      } 
      
    /**
    * This useEffect controls the rendering in life cycles of the API called inside of the function callCards.
    * Contains a cleaup to avoid secondary effects and has a dependency to control the changes when it is updated.
    */
    useEffect(() =>{
      callCards()
        return () => {}
        },[urlApi])

  return (
    <Container>
      <HeaderYugi />
         <div className="d-flex justify-content-around" style={{height: '4%', marginTop: "7vh"}}> 
        <NumberComponent numCards={handleInputChange}/>
        <Paginations pagItems={paginationItems}/>
        <ButtonView cardsView={handleCardsView} />
        </div> 
        <ErrorMessage error={messageError}/>  
        <Row>
        <CardsInfo allCards={cards} toggle={toggleCards}/>
        </Row>
       <Paginations pagItems={paginationItems}/>
  </Container>
  )
}

export default CardsLogic