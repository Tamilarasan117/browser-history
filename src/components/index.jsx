import './index.css'

const BrowserHistory = (props) => {
  const {
    browserHistoryDetails,
    onSelect,
    onDelete,
  } = props

  const {id,timeAccessed,logoUrl,title,domainUrl} = browserHistoryDetails

  const onDeleteBrowserHistory = () => {
    onDelete(id)
  }

  const onSelectHistroys = () => {
    onSelect(title)
  }

  return (
    <li className="history-list">
      <p className="time">{timeAccessed}</p>
      <div className="history-container">
        <div className="app-domain-container">
          <img
            src={logoUrl}
            alt="domain logo"
            className="logo"
          />
          <div className="domain-container">
            <p className="history-title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <div className="button-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
            onClick={onSelectHistroys}
          />
          <hr className="line" />
          <button type="button" data-testid="delete" onClick={onDeleteBrowserHistory} className="delete-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistory
