import { useRouter } from 'next/router';
import GameResult from 'components/game/GameResult';
import GameMode from 'components/mode/modeWraps/GameMode';
import styles from 'styles/game/GameResultItem.module.scss';

export default function Game() {
  const router = useRouter();

  return (
    <div className={styles.pageWrap}>
      <h1
        className={styles.title}
        onClick={() =>
          router.push(`/game`, undefined, {
            shallow: true,
          })
        }
      >
        Record
      </h1>
      <GameMode>
        <GameResult />
      </GameMode>
    </div>
  );
}
