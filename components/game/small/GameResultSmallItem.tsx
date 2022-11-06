import { useSetRecoilState } from 'recoil';
import { Game } from 'types/gameTypes';
import { clickedGameItemState } from 'utils/recoil/game';
import GameResultSmallScore from 'components/game/small/GameResultSmallScore';
import GameResultSmallTeam from 'components/game/small/GameResultSmallTeam';
import styles from 'styles/game/GameResultItem.module.scss';

interface GameResultSmallItemProps {
  game: Game;
}

export default function GameResultSmallItem({
  game,
}: GameResultSmallItemProps) {
  const { mode, team1, team2, gameId } = game;
  const setClickedItemId = useSetRecoilState(clickedGameItemState);
  return (
    <div
      className={`${styles.smallContainer}
			${mode === 'normal' ? styles.normal : styles.rank}`}
      onClick={() => setClickedItemId(gameId)}
    >
      <GameResultSmallTeam team={team1} userLeft={true} />
      <GameResultSmallScore
        mode={mode}
        scoreTeam1={team1.score}
        scoreTeam2={team2.score}
      />
      <GameResultSmallTeam team={team2} userLeft={false} />
    </div>
  );
}