import './header.css';
import { FaSearch } from 'react-icons/fa';

export default function Header({onChange}) {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WPXYf4SshaiSDmFhbY2g5-hXfifpEzntXw&s
" alt="Logo" className="logo-image" />
                <h1 className="site-title">Times de volei</h1>
            </div>


            <div className="search-container">
                <input type="text" className="search-input" placeholder="Buscar..." onChange= {onChange} />
                <button className="search-btn">
                    <FaSearch />
                </button>
            </div>

        </header>
    );
}
