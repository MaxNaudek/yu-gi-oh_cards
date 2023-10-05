/**
 * This function returns a JSX with the main title at the top of the view.
 */
import '../App.css';
import { fontYugi } from '../ImagePrototype/fontbolt.png';
function HeaderYugi() {
  return (
    <div className="d-flex justify-content-center" style={{fontSize: '4rem', margin: '2%',  border: '1rem double #3B9AE1', fontFamily:'Fira Sans, sans-serif'}}>
     <img alt='yugioh title font' src={fontYugi} />
    </div>
  )
}

export default HeaderYugi