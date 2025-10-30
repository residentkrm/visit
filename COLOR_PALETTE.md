# Color Palette

Переиспользуемая палитра цветов для проектов.

## 🎨 Основные цвета

| Цвет | Hex | Назначение |
|------|-----|------------|
| `#FFF` | Белый | Фон, светлые элементы |
| `#1F2937` | Темно-серый | Основной текст, темные элементы |
| `#f97316` | Оранжевый | Акценты, активные элементы |

## 🎯 Дополнительные цвета

| Цвет | Hex | Назначение |
|------|-----|------------|
| `#374151` | Серый | Неактивные элементы |
| `#9ca3af` | Светло-серый | Вторичный текст |
| `#d1d5db` | Очень светло-серый | Третичный текст |
| `#6b7280` | Средне-серый | Мелкий текст |

## 📁 Файлы

- `assets/css/color-palette.css` - CSS переменные и утилитарные классы
- `assets/types/colors.ts` - TypeScript типы и константы

## 🚀 Использование

### CSS переменные

```css
.my-element {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}
```

### Утилитарные классы

```html
<div class="bg-primary text-primary-foreground">Активный элемент</div>
<div class="bg-muted text-muted-foreground">Неактивный элемент</div>
```

### TypeScript

```typescript
import { COLORS, getColor, createChipStyles } from '~/assets/types/colors';

// Прямое использование
const primaryColor = COLORS.primary;

// Через функцию
const backgroundColor = getColor('primary');

// Создание стилей для чипа
const activeChipStyles = createChipStyles(true);
const inactiveChipStyles = createChipStyles(false);
```

## 🎨 Применение в проектах

### 1. Копирование файлов
Скопируйте `color-palette.css` и `colors.ts` в ваш проект.

### 2. Подключение CSS
```css
@import './assets/css/color-palette.css';
```

### 3. Импорт TypeScript
```typescript
import { COLORS } from './assets/types/colors';
```

## 🔧 Кастомизация

Для изменения цветов отредактируйте значения в `:root` секции `color-palette.css`:

```css
:root {
  --color-primary: #your-color;
  --color-background: #your-background;
  /* ... */
}
```

## 📱 Адаптивность

Палитра работает на всех устройствах и поддерживает:
- Светлые и темные темы
- Высокий контраст
- Доступность (WCAG)

## 🎯 Примеры использования

### Кнопки
```html
<button class="bg-primary text-primary-foreground px-4 py-2 rounded">
  Основная кнопка
</button>
```

### Карточки
```html
<div class="bg-background border border-muted p-4 rounded">
  <h3 class="text-foreground">Заголовок</h3>
  <p class="text-muted-foreground">Описание</p>
</div>
```

### Чипы/Теги
```html
<span class="chip-active px-2 py-1 rounded text-xs">Активный</span>
<span class="chip-inactive px-2 py-1 rounded text-xs">Неактивный</span>
```

