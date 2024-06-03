import React from 'react';
import styles from './HeaderComponent.css'; // Импорт модульных стилей для компонента

import TextField from './TextField/TextFieldComponent';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={""} alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.finder}>
        <TextField />
      </div>
    </header>
  );
}

export default Header;
