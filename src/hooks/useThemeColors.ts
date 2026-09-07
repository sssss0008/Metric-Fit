import { useStore } from '../store/useStore';
import { LightColors, DarkColors } from '../constants/Colors';

export function useThemeColors() {
  const theme = useStore((state) => state.settings.theme);
  return theme === 'dark' ? DarkColors : LightColors;
}
