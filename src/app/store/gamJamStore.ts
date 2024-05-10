import { create } from "zustand";

interface GameJamState {
  playerScore: number;
  selectedVideo: "left" | "right" | null;
  rounds: number;
  // we will figure this out after we know what the data looks like
  videos: any;
  currentIndex: number;
  currentRound: number;
}

export interface GameJamActions {
  setSelectedVideo: (side: "left" | "right") => void;
  setPlayerScore: (isCorrect: boolean) => void;
  setVideos: (videos: any) => void;
  nextVideoPair: () => void;
  setCurrentRound: (currentRound: number) => void;
}

const useGamJamStore = create<GameJamState & GameJamActions>((set) => ({
  rounds: 10,
  playerScore: 10,
  selectedVideo: null,
  videos: [],
  currentIndex: 0,
  currentRound: 1,
  setSelectedVideo: (side: "left" | "right") =>
    set(() => ({ selectedVideo: side })),

  setPlayerScore: (isCorrect) =>
    set((state) => ({
      playerScore: state.playerScore + (isCorrect ? 10 : -10),
    })),
  setVideos: (videos) => set({ videos }),
  nextVideoPair: () =>
    set((state) => {
      const newIndex = state.currentIndex + 2;
      if (newIndex < 20) {
        return {
          currentIndex: newIndex,
          selectedVideo: null,
        };
      } else {
        console.log("All video pairs have been displayed");
        return {
          currentIndex: state.currentIndex,
          selectedVideo: null,
        };
      }
    }),

  setCurrentRound: (currentRound) => set({ currentRound }),
}));

export default useGamJamStore;
