// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {Details, updateSearchInput} = props
  const {suggestion} = Details

  const updateButton = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" onClick={updateButton} className="button">
        <img
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
