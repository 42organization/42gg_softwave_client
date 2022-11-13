import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Exp } from 'types/modalTypes';
import instance from 'utils/axios';
import { modalState } from 'utils/recoil/modal';
import { errorState } from 'utils/recoil/error';
import ExpStat from './ExpStat';
import PppStat from 'components/modal/statChange/PppStat';
import styles from 'styles/modal/StatChangeModal.module.scss';

export default function StatChangeModal({ gameId, mode }: Exp) {
  const setModal = useSetRecoilState(modalState);
  const setError = useSetRecoilState(errorState);
  const [stat, setStat] = useState();

  useEffect(() => {
    getExpHandler();
  }, []);

  const getExpHandler = async () => {
    try {
      const res = await instance.get(
        `/pingpong/games/${gameId}/result/${mode}`
      );
      setStat({ ...res.data });
    } catch (e) {
      setError('KP03');
    }
  };

  if (!stat) return null;

  return (
    <div>
      <div
        className={`${styles.fixedContainer} ${styles.front}`}
        onClick={() => setModal({ modalName: null })}
      ></div>
      <div className={styles.container}>
        <div className={styles.emoji}>🏓</div>
        {mode === 'rank' && <PppStat stat={stat} />}
        <ExpStat stat={stat} />
        <div className={styles.guide}>화면을 클릭해주세요!</div>
      </div>
    </div>
  );
}