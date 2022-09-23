/**
 * This function returns a JSX component to render multiple elements in different pages.
 * It receive a prop from the component CardsLogic that allows to generate the length of this component.
 */
import React from 'react'
import {Pagination} from 'react-bootstrap/';
import '../App.css'

function Paginations({pagItems}) {
  return (
    <Pagination className="d-flex justify-content-center" size="lg" >{pagItems} </Pagination>
  )
}

export default Paginations