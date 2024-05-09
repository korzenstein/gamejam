import { create } from "zustand";


interface GameJamState {
  playerScore: number;
  selectedVideo: 'left' | 'right' | null; 
  // we will figure this out after we know what the data looks like
  videos: any; 
  currentIndex: number;  
}

export interface GameJamActions {
  setSelectedVideo: (side: 'left' | 'right') => void;
  setPlayerScore: (isCorrect: boolean) => void;
  setVideos: (videos: any) => void;
  nextVideoPair: () => void;
}

const useGamJamStore = create<GameJamState & GameJamActions>((set) => ({
  playerScore: 10,
  selectedVideo: null,
  videos: [],
  currentIndex: 0,

  setSelectedVideo: (side: 'left' | 'right') =>
    set(() => ({ selectedVideo: side })),

  setPlayerScore: (isCorrect) =>
    set((state) => ({
      playerScore: state.playerScore + (isCorrect ? 5 : -5)
    })),

    setVideos: (videos) => set({ videos }),
    nextVideoPair: () => set((state) => ({
    currentIndex: (state.currentIndex + 2) % state.videos.length, 
    selectedVideo: null, 
  })),
}));

export default useGamJamStore;
