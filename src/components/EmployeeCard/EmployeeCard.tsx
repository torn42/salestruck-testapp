import { FC } from 'react';
import { Address, Company } from '@/types.ts';

import user from '@/assets/user.png';
import styles from './EmployeeCard.module.scss';

export interface EmployeeCardProps {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const EmployeeCard: FC<EmployeeCardProps> = ({ name, username, email, address, phone, company, website }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card__top']}>
        <div className={styles['card__top-left']}>
          <p>Сайт: {website}</p>
          <p>Телефон: {phone}</p>
          <p>Почта: {email}</p>
        </div>
        <div className={styles['card__top-right']}>
          <p>Адрес: {address.city}, <br />{address.street}, {address.suite}</p>
          <p>Координаты: {address.geo.lat} {address.geo.lng}</p>
        </div>
      </div>
      <div className={styles['card__bottom']}>
        <img src={user} alt="" />
        <h1>{name}</h1>
        <h3>{username}</h3>
        <div className={styles['card__bottom-company']}>
          <h3>Компания:</h3>
          <div className={styles['card_bottom-company-info']}>
            <p>Название: {company.name}</p>
            <p>Специализация: {company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};