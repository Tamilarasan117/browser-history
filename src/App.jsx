import './App.css'
import { Component } from 'react'
import BrowserHistory from './components'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'https://instagram.com/',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'https://twitter.com/',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'https://facebook.com/',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'https://linkedin.com/',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'https://hashnode.com/',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'https://github.com/',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'https://reactjs.org/',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'https://stackoverflow.com/',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'https://mail.google.com/',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'https://google.com/',
  },
]

class App extends Component {
  state = {
    searchInput: "",
    historyList: initialHistoryList,
  }

  onSearchHistory = (event) => {
    this.setState({searchInput: event.target.value})
  }

  onSelectHistroy = (title) => {
    this.setState({searchInput: title})
  }

  onDeleteHistory = (id) => {
    const {historyList} = this.state
    const filterSearchHistory = historyList.filter(eachHistory => (
      eachHistory.id !== id
    ))
    this.setState({historyList: filterSearchHistory})
  }

  render() {
    const {
      searchInput,
      historyList,
    } = this.state

    const searchResult = historyList.filter(eachHistory => (
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase())
    ))

    if(searchResult.length) {
      return (
        <div className="app-container">
          <div className="container1">
            <div className="header-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                className="app-logo-img"
              />
              <div className="search-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <hr className="line" />
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search history"
                  onChange={this.onSearchHistory}
                  value={searchInput}
                />
              </div>
            </div>
            <div className="container2">
              <ul className="history-list-container">
                {
                  searchResult.map(eachHistory => (
                    <BrowserHistory
                      browserHistoryDetails={eachHistory}
                      key={eachHistory.id}
                      onSelect={this.onSelectHistroy}
                      onDelete={this.onDeleteHistory}
                    />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="app-container">
        <div className="container1">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo-img"
            />
            <div className="search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <hr className="line" />
              <input
                type="search"
                className="search-field"
                placeholder="Search history"
                onChange={this.onSearchHistory}
                value={searchInput}
              />
            </div>
          </div>
          <div className="container3">
            <p className="empty-text">There is no history to show</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
