/**
 * Color Palette - TypeScript definitions
 * Переиспользуемая палитра цветов для проектов
 */

export interface ColorPalette {
  primary: string;
  primaryForeground: string;
  background: string;
  foreground: string;
  dark: string;
  darkForeground: string;
  muted: string;
  mutedForeground: string;
  secondary: string;
  subtle: string;
}

export const COLORS: ColorPalette = {
  // Основная палитра
  primary: '#f97316',
  primaryForeground: '#ffffff',
  
  background: '#ffffff',
  foreground: '#1f2937',
  
  dark: '#1f2937',
  darkForeground: '#ffffff',
  
  // Дополнительные цвета
  muted: '#374151',
  mutedForeground: '#9ca3af',
  
  secondary: '#d1d5db',
  subtle: '#6b7280',
} as const;

export const COLOR_NAMES = {
  PRIMARY: 'primary',
  PRIMARY_FOREGROUND: 'primaryForeground',
  BACKGROUND: 'background',
  FOREGROUND: 'foreground',
  DARK: 'dark',
  DARK_FOREGROUND: 'darkForeground',
  MUTED: 'muted',
  MUTED_FOREGROUND: 'mutedForeground',
  SECONDARY: 'secondary',
  SUBTLE: 'subtle',
} as const;

export type ColorName = keyof typeof COLOR_NAMES;

/**
 * Получить цвет по имени
 */
export function getColor(name: keyof ColorPalette): string {
  return COLORS[name];
}

/**
 * Получить CSS переменную для цвета
 */
export function getColorVar(name: keyof ColorPalette): string {
  return `var(--color-${name.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
}

/**
 * Создать стили для чипа
 */
export function createChipStyles(isActive: boolean = true) {
  return {
    backgroundColor: isActive ? COLORS.primary : COLORS.muted,
    color: isActive ? COLORS.primaryForeground : COLORS.mutedForeground,
  };
}

/**
 * Создать стили для кнопки
 */
export function createButtonStyles(variant: 'primary' | 'secondary' | 'ghost' = 'primary') {
  const variants = {
    primary: {
      backgroundColor: COLORS.primary,
      color: COLORS.primaryForeground,
    },
    secondary: {
      backgroundColor: COLORS.muted,
      color: COLORS.mutedForeground,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: COLORS.foreground,
    },
  };
  
  return variants[variant];
}

