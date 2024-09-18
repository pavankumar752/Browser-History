import React, {useState} from 'react'
import './index.css'


const BrowserHistory = ({ initialHistoryList }) => {
    const [historyList, setHistoryList] = useState(initialHistoryList);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleDelete = (index) => {
        const updatedHistoryList = historyList.filter((_, i) => i !== index);
        setHistoryList(updatedHistoryList);
    };

    const filteredHistoryList = historyList.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <header className="header">
                <img 
                    src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" 
                    alt="App Logo" 
                    className="logo" 
                />
                <div className="search-container">
                    <img 
                        src="https://assets.ccbp.in/frontend/react-js/search-img.png" 
                        alt="Search Icon" 
                        className="search-icon" 
                    />
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Search history..." 
                        value={searchInput} 
                        onChange={handleSearchChange}
                    />
                </div>
            </header>

            <div className="card">
                {filteredHistoryList.length === 0 ? (
                    <div className="empty-history">
                        <p>Empty History View</p>
                    </div>
                ) : (
                    <ul className="history-list">
                        {filteredHistoryList.map((item, index) => (
                            <li key={index} className="history-item">
                                <p className="item-time">{item.timeAccessed}</p>
                                <img src={item.logoUrl} alt={item.title} className="item-logo" />
                                <p className="item-title">{item.title}</p>
                                <button 
                                    className="delete-button" 
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BrowserHistory;