import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import MatchSlotList from './MatchSlotList';
import { MatchData } from 'types/matchTypes';
import { matchRefreshBtnState } from 'utils/recoil/match';
import { errorState } from 'utils/recoil/error';
import { modalState } from 'utils/recoil/modal';
import instance from 'utils/axios';
import styles from 'styles/match/MatchBoard.module.scss';

interface MatchBoardProps {
  type: string;
}

export default function MatchBoard({ type }: MatchBoardProps) {
  const [matchData, setMatchData] = useState<MatchData | null>(null);
  const [spinRefreshButton, setSpinRefreshButton] = useState<boolean>(false);
  const setRefreshMatch = useSetRecoilState(matchRefreshBtnState);
  const setErrorMessage = useSetRecoilState(errorState);
  const setModalInfo = useSetRecoilState(modalState);
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMatchDataHandler();
  }, []);

  useEffect(() => {
    currentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [matchData]);

  const getMatchDataHandler = async () => {
    try {
      const res = await instance.get(`/pingpong/match/tables/${1}/single`);
      setMatchData(res?.data);
    } catch (e) {
      setErrorMessage('SJ01');
    }
  };

  if (!matchData) return null;

  const { matchBoards, intervalMinute } = matchData;

  if (matchBoards.length === 0)
    return <div className={styles.notice}>❌ 열린 슬롯이 없습니다 😵‍💫 ❌</div>;

  const lastSlotTime = matchBoards[matchBoards.length - 1][0].time;
  const lastSlotHour = new Date(lastSlotTime).getHours();
  const currentHour = new Date().getHours();

  const openManual = () => {
    setModalInfo({ modalName: 'MATCH-MANUAL' });
  };

  const refreshMatchData = () => {
    setSpinRefreshButton(true);
    setTimeout(() => {
      setSpinRefreshButton(false);
    }, 1000);
    getMatchDataHandler();
    setRefreshMatch(true);
  };

  const getScrollCurrentRef = (slotsHour: number) => {
    if (currentHour === lastSlotHour && currentHour === slotsHour)
      return currentRef;
    if (slotsHour === currentHour + 1) return currentRef;
    return null;
  };

  return (
    <>
      <div className={styles.buttonWrap}>
        <input
          className={styles.manual}
          onClick={openManual}
          type='button'
          value='매뉴얼'
        />
        <input
          className={`${styles.refresh} ${spinRefreshButton && styles.spin}`}
          onClick={refreshMatchData}
          type='button'
          value='&#8635;'
        />
      </div>
      {currentHour > lastSlotHour && (
        <div className={styles.notice}>
          ❌ 오늘의 매치가 모두 끝났습니다! ❌
        </div>
      )}
      <div className={styles.matchBoard}>
        {matchBoards.map((matchSlots, i) => {
          const slotTime = new Date(matchSlots[0].time);
          return (
            <div
              className={styles.matchSlotList}
              key={i}
              ref={getScrollCurrentRef(slotTime.getHours())}
            >
              <MatchSlotList
                type={type}
                intervalMinute={intervalMinute}
                matchSlots={matchSlots}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
