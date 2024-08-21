import { FaStar } from 'react-icons/fa';
import './card.css';

export default function Card({ id, title, description, image, isFavorited, onFavoriteToggle }) {
    const handleFavoriteClick = () => {
        onFavoriteToggle(!isFavorited,id); // Notifica o componente pai sobre a mudança
    };

    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <button className="favorite-btn" onClick={handleFavoriteClick}>
                <FaStar className={'star'} style={{ color: isFavorited ? 'red' : 'black' }} />
            </button>
        </div>
    );
}
