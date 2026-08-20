import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserSettings {
  unit: 'metric' | 'imperial';
  theme: 'dark' | 'light';
}

interface AppState {
  settings: UserSettings;
  streak: number;
  lastLogDate: string | null;
  setUnit: (unit: 'metric' | 'imperial') => void;
  updateStreak: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      settings: {
        unit: 'metric',
        theme: 'dark',
      },
      streak: 0,
      lastLogDate: null,
      setUnit: (unit) => set((state) => ({ settings: { ...state.settings, unit } })),
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = get().lastLogDate;

        if (lastDate === today) return;

        let newStreak = get().streak;
        if (lastDate) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (lastDate === yesterdayStr) {
            newStreak += 1;
          } else {
            newStreak = 1;
          }
        } else {
          newStreak = 1;
        }

        set({ streak: newStreak, lastLogDate: today });
      },
    }),
    {
      name: 'metric-fit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
