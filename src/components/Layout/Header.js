import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='Meals on a table' />
      </div>
    </>
  );
};

export default Header;
