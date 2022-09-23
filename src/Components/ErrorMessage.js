/**
 * This function returns a JSX component with an error message.
 * It receives a prop from the component CardsLogic.
 * The message is produced when you write or select a number above of 50 in the input form.
 */

function ErrorMessage({error}) {
  return (
    <div style={{fontSize: '4vh'}}>{error}</div>
  )
}

export default ErrorMessage