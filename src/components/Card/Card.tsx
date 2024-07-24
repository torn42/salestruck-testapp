import { FC } from 'react';

import user from '@/assets/user.png';

import styles from './Card.module.scss';

interface CardProps {
  comments: boolean;
  userId?: number;
  postId?: number;
  id: number;
  title?: string;
  body: string;
  name?: string;
}

export const Card: FC<CardProps> = ({ comments, userId, postId, id, body, title, name }) => {
  if (comments) {
    return (
      <div className={styles.comment}>
        <div className={styles['comment__top']}>
          <img src={user} alt="" />
          <p>{name}</p>
          <span>Id: {postId}</span>
        </div>
        <div className={styles['comment__bottom']}>
          <p>{body}</p>
          <span>Id поста: {id}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <div className={styles['post__left']}>
        <p>от пользователя №{userId}</p>
        <img src={user} alt="usericon" />
        <p>Пост #{id}</p>
      </div>
      <div className={styles['post__right']}>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
    </div>
  );
};