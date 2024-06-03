import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TextFieldComponent.css";

const TextField = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/ComixList/filter/${searchTerm.trim()}`);
        } else {
            navigate(`/`);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <button onClick={handleSearch}>
                    Поиск
                </button>
                <input 
                    type="text" 
                    placeholder="Поиск" 
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Добавляем обработчик для события нажатия клавиши
                />
            </div>
        </div>
    );
}

export default TextField;
