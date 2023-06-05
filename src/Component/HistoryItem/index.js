import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyDetails
  console.log(historyDetails)

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img className="image" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button data-testid="delete" onClick={onClickDelete} type="button">
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
