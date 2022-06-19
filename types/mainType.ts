export interface UserData {
  userId: string;
  userImageUri: string;
}

export interface LiveData {
  notiCount: number;
  gameId: number | null;
  event: string | null;
}

export interface SearchData {
  users: string[];
}
export interface currentMatch {
  time: string;
  enemyTeam: [];
  match: {
    slotId: number;
    isMatch: boolean;
  };
}
