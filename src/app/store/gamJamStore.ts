import { create } from "zustand";

interface GameJamState {
  player1score: number;
  player2score: number;
}

export interface GameJamActions {
  setPlayer1Score: (player1score: number) => void;
  setPlayer2Score: (player2score: number) => void;
}

const useGamJamStore = create<GameJamState & GameJamActions>((set) => ({
  player1score: 10,
  player2score: 10,
  setPlayer1Score: (player1score) => set({ player1score }),
  setPlayer2Score: (player2score) => set({ player2score }),
}))
;

export default useGamJamStore;