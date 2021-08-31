import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const selectTab = () => {
    updateActiveTabId(tabId)
  }

  const activeTabItemClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabItemClassName}`}
        onClick={selectTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
