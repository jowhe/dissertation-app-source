type ThemeContextType = {
  isDark: boolean,
  isLight: boolean,
  isLarge: boolean,
  enableDark: () => void,
  enableLight: () => void,
  enableLarge: () => void
}

type UserTasksCategories = {
  name: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

export type {ThemeContextType, UserTasksCategories}