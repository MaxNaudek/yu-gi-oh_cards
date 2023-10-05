/**
 * CardsLogic is the main component of this project and is the center of the communication between every component.
 */
import CardsLogic from './Logic/CardsLogic'
import {BrowserRouter, Route, Routes, Navigate, NavLink, Link} from "react-router-dom"
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
        <Route path='/yu-gi-oh_cards/' element={<CardsLogic/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
