import { AppDispatch, RootState } from '@/store';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts } from '@/store/main/asyncActions.ts';

import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import { Status } from '@/types';

export const Dashboard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, comments, postsStatus, commentsStatus } = useSelector((state: RootState) => state.main);
  let postsCount;
  let commentsCount;

  const fetchInfo = () => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  switch (postsStatus) {
    case Status.LOADING:
      postsCount = <div className={styles['stats__inner-number']}>Загрузка...</div>;
      break;
    case Status.SUCCESS:
      postsCount = <div className={styles['stats__inner-number']}>{posts.length}</div>;
      break;
    case Status.ERROR:
      postsCount = <div className={styles['stats__inner-number']}>К сожалению, загрузить посты не удалось.</div>;
      break;
    default:
      postsCount = null;
  }

  switch (commentsStatus) {
    case Status.LOADING:
      commentsCount = <div className={styles['stats__inner-number']}>Загрузка...</div>;
      break;
    case Status.SUCCESS:
      commentsCount = <div className={styles['stats__inner-number']}>{comments.length}</div>;
      break;
    case Status.ERROR:
      commentsCount = <div className={styles['stats__inner-number']}>К сожалению, загрузить комменты не удалось.</div>;
      break;
    default:
      commentsCount = null;
  }

  return (
    <div className={styles.stats}>
      <div className={styles['stats__inner']}>
        <p>Количество постов:</p>
        {postsCount}
        <Link to="/posts">Список постов</Link>
      </div>
      <div className={styles['stats__inner']}>
        <p>Количество комментариев:</p>
        {commentsCount}
        <Link to="/comments">Список комментариев</Link>
      </div>
    </div>
  );
};