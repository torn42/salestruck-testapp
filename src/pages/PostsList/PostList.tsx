import { Card } from '@/components/Card';
import { FC, useEffect } from 'react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '@/types';
import { fetchPosts } from '@/store/main/asyncActions';

import styles from './PostList.module.scss';

export const PostList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { posts } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className={styles['posts-list']}>
      <h1>СПИСОК ПОСТОВ</h1>
      {posts.map((post: Post) => <Card {...post} comments={false} />)}
    </div>
  );
};