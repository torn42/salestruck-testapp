import { FC, useEffect } from 'react';

import user from '@/assets/user.png';

import styles from './Profile.module.scss';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '@/store/profile/asyncActions';
import { Status } from '@/types.ts';

export const Profile: FC = () => {
  let profileInfo;
  const dispatch = useDispatch<AppDispatch>();
  const { profile, status } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  switch (status) {
    case Status.LOADING:
      profileInfo = <div className={styles.profile}>Загрузка...</div>;
      break;
    case Status.SUCCESS:
      profileInfo = <div className={styles.profile}>
        <div className={styles['profile__left']}>
          <img src={user} alt="" />
          <button>Редактировать профиль</button>
        </div>
        <div className={styles['profile__right']}>
          <div>Имя</div>
          <p>{profile.name}</p>
          <div>Имя пользователя</div>
          <p>{profile.username}</p>
          <div>Почта</div>
          <p>{profile.email}</p>
          <div>Город</div>
          <p>{profile.address.city}</p>
          <div>Улица</div>
          <p>{profile.address.street}</p>
          <div>Офис</div>
          <p>{profile.address.suite}</p>
          <div>Телефон</div>
          <p>{profile.phone}</p>
          <div>Вебсайт</div>
          <p>{profile.website}</p>
          <div>Название компании</div>
          <p>{profile.company.name}</p>
          <div>Крылатая фраза компании</div>
          <p>{profile.company.catchPhrase}</p>
          <div>Специализация компании</div>
          <p>{profile.company.bs}</p>
        </div>
      </div>;
      break;
    case Status.ERROR:
      profileInfo = <div className={styles.profile}>К сожалению, загрузить комменты не удалось.</div>;
      break;
    default:
      profileInfo = null;
  }

  return (
    <>
      {profileInfo}
    </>
  );
};