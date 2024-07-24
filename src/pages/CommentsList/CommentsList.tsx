import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchComments } from '@/store/main/asyncActions.ts';
import { Card } from '@/components/Card';

import styles from '../PostsList/PostList.module.scss';
import { Comment } from '@/types.ts';

export const CommentsList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { comments } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  
  return (
    <div className={styles['posts-list']}>
      <h1>СПИСОК КОММЕНТАРИЕВ</h1>
      {comments.map((comment: Comment) => <Card {...comment} comments={true} />)}
    </div>
  );
};