import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={location.pathname === '/dashboard' ? 'active' : ''}>Главная</Link>
      <Link to="/employees" className={location.pathname === '/employees' ? 'active' : ''}>Сотрудники</Link>
      <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Профиль</Link>
    </div>
  );
};