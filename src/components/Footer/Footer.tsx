import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <>
      <nav>
        биба
        <Link to="/dashboard">Главная</Link>
        <Link to="/employees">Сотрудники</Link>
        <Link to="/profiles">Профили</Link>
      </nav>
      <div>хелло</div>
    </>
  );
};