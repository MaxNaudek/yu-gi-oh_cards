/**
 * This function returns a JSX button that activates a toggle who changes an state from true to false.
 * It triggers a conditional rendering component with the event onClick who receive a prop from the component CardLogic.
 */

import {  Button } from 'react-bootstrap/';

function ButtonView({cardsView}) {
 
  return (
    
        <Button variant="outline-primary" onClick={cardsView} style={{ fontSize: '3vh' }}> Change View</Button>
  )
}

export default ButtonView