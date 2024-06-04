import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './HeaderComponent.css'; // Импорт модульных стилей для компонента
import { useNavigate } from 'react-router-dom';

import TextField from './TextField/TextFieldComponent';

const Header = () => {
  const [buttonText, setButtonText] = useState('Корзина'); // Default button text
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search); // Extract search parameters
    const query = searchParams.get('q') || ''; // Get the 'q' parameter or default to ''

    // Determine button text based on pathname
    const isBucketPage = location.pathname === '/bucket';
    setButtonText(isBucketPage ? 'Каталог' : 'Корзина');
  }, [location]); // Run useEffect only when location changes

  const handleBucketClick = () => {
    if(buttonText == 'Каталог'){
      navigate('/'); // Redirect to bucket page on click

    }else {
      navigate('/bucket'); // Redirect to bucket page on click
    }
    
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={''} alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.finder}>
        <TextField />
      </div>
      <button onClick={handleBucketClick}>{buttonText}</button>
    </header>
  );
};

export default Header;
