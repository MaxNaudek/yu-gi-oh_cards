/**
 * This function returns a JSX component that provides an input form. 
 * It allows modifying the number of elements displayed on the screen by adding a number manually.
 * It receive a prop from the component CardsLogic to gets the value of that input form.
 */

import React from 'react'
import {Form} from 'react-bootstrap/';

function NumberComponent({numCards}) {
  return (
    <Form.Control 
    size="lg" 
    style={{width: "20%", margin: "3px"}}
    placeholder= "Select number of cards!"
    type="number"
    name="numberResult"
    min="10"
    max="50"
    onChange={numCards}
/> 
  )
}

export default NumberComponent