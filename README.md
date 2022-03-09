# S-LINES.

## Игра Просто шарики

### Описание
Прототипом игры «S-LINES» (Simple-Lines) является игра «LINES»

Основой «S-LINES» является игровое поле (стол), состоящее из ячеек, предназначенных для размещения шариков.
Форм-фактор поля - квадрат. Размер стола 9 на 9 ячеек.

На игровом поле в случайных позициях (ячейках) в начале игры размешаются несколько шариков разного цвета.
Цветовая гамма шариков Красный-Желтый-Зеленый
Игрок может выбрать шарик и переместить его на другую позицию.
Новые шарики появляются на поле после каждого хода, не вызвавшего исчезновение ни одной линии.
Число выпадающих новых шаров зависит от уровня сложности игры.

Соседние ячейки на игровом поле классифицируются в смысле окрестности фон Неймана - соседними ячейками считаются только 4 ячейки по вертикали и горизонтали.

### Цель игры
Не допустить заполнения игрового поля шарами, уничтожая их при помощи группировки в горизонтальные и вертикальные линии.

### Правила
- Шарики выставляются игроком
- Игрок может создавать цепочки шариков в горизонтальном или вертикальном направлениях.
- Если при этом получаются цепочки шариков из 3-х и более штук одного цвета - цепочка удаляется.
- За один ход можно переставить только один шар из одной ячейки в другую.
- Если ход игрока не приводит к удалению цепочек шариков, на поле в случайном порядке выбрасываются новые шарики.
- Новые шарики появившиеся на поле и образующие цепочки со старыми шариками не удаляются.
- Игрок может переставить шар только при условии наличия свободного прохода к выбранной ячейке
- Шарик может двигаться только по вертикали или горизонтали

## Цель проекта
Целю проекта является использование на практике теоретических знаний о разработке React-Redux приложения  

## Демо
https://ermakof.github.io/lines/

## Storybook
https://www.chromatic.com/library?appId=6202481eb531db003aa37524

## Скрипты запуска
Доступные скрипты проекта

### `npm run start`

Запуск приложения
Open [http://localhost:8081](http://localhost:8081) в браузере.

Горячая перезагрузка страницы.\
Вывод ошибок в консоль.

### `npm run test`

Запуск тестов.

### `npm run lint`

Запуск линтера

### `npm run lint:fix`

Авто исправление линтером ошибок

### `npm run storybook`

Запуск storybook

### `npm run build-storybook`

Сборка storybook

### `npm run build`

Сборка приложения в каталог 'public'.

### `npm run chromatic`

Запуск chromatic.

### `npx stryker run`
Запуск stryker.

## Tests
```
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------|---------|----------|---------|---------|-------------------
All files                   |     100 |    88.08 |     100 |     100 |                  
 src                        |     100 |      100 |     100 |     100 |                  
  Root.tsx                  |     100 |      100 |     100 |     100 |                  
 src/App                    |     100 |    73.52 |     100 |     100 |                  
  AppBody.tsx               |     100 |       50 |     100 |     100 | 18               
  AppBottom.tsx             |     100 |    66.66 |     100 |     100 | 18               
  AppHeader.tsx             |     100 |      100 |     100 |     100 |                  
  AppRouter.tsx             |     100 |      100 |     100 |     100 |                  
  appSaga.ts                |     100 |    76.19 |     100 |     100 | 70-158,207       
  appSlice.ts               |     100 |       75 |     100 |     100 | 55-60            
  index.tsx                 |     100 |      100 |     100 |     100 |                  
  initialState.ts           |     100 |      100 |     100 |     100 |                  
 src/App/model              |       0 |        0 |       0 |       0 |                  
  IAppState.ts              |       0 |        0 |       0 |       0 |                  
  ICellsProps.ts            |       0 |        0 |       0 |       0 |                  
 src/components             |     100 |    77.77 |     100 |     100 |                  
  Button.tsx                |     100 |      100 |     100 |     100 |                  
  GameTitle.tsx             |     100 |      100 |     100 |     100 |                  
  Loading.tsx               |     100 |      100 |     100 |     100 |                  
  Percentage.tsx            |     100 |    66.66 |     100 |     100 | 11               
  Score.tsx                 |     100 |        0 |     100 |     100 | 11               
  Select.tsx                |     100 |      100 |     100 |     100 |                  
 src/layout                 |     100 |      100 |     100 |     100 |                  
  Grid.ts                   |     100 |      100 |     100 |     100 |                  
  Panel.ts                  |     100 |      100 |     100 |     100 |                  
  Section.ts                |     100 |      100 |     100 |     100 |                  
  Title.ts                  |     100 |      100 |     100 |     100 |                  
 src/modules/Auth           |     100 |       95 |     100 |     100 |                  
  AuthForm.tsx              |     100 |      100 |     100 |     100 |                  
  AuthLayout.tsx            |     100 |       80 |     100 |     100 | 33               
  RequireAuth.tsx           |     100 |      100 |     100 |     100 |                  
  authSaga.ts               |     100 |      100 |     100 |     100 |                  
  authSlice.ts              |     100 |      100 |     100 |     100 |                  
  fakeAuthProvider.ts       |     100 |      100 |     100 |     100 |                  
  initialState.ts           |     100 |      100 |     100 |     100 |                  
 src/modules/Auth/model     |       0 |        0 |       0 |       0 |                  
  IAuthState.ts             |       0 |        0 |       0 |       0 |                  
  IUserProfile.ts           |       0 |        0 |       0 |       0 |                  
 src/modules/Cell           |     100 |    86.04 |     100 |     100 |                  
  constatnts.ts             |     100 |      100 |     100 |     100 |                  
  index.tsx                 |     100 |    86.04 |     100 |     100 | 111-113,122-129  
  models.ts                 |       0 |        0 |       0 |       0 |                  
 src/modules/GameField      |     100 |      100 |     100 |     100 |                  
  index.tsx                 |     100 |      100 |     100 |     100 |                  
 src/modules/HitParade      |     100 |    73.68 |     100 |     100 |                  
  PlayerList.tsx            |     100 |      100 |     100 |     100 |                  
  PlayerListHeader.tsx      |     100 |      100 |     100 |     100 |                  
  PlayerListRow.tsx         |     100 |    33.33 |     100 |     100 | 12-17            
  index.tsx                 |     100 |      100 |     100 |     100 |                  
  layout.ts                 |     100 |      100 |     100 |     100 |                  
  models.ts                 |       0 |        0 |       0 |       0 |                  
  utils.ts                  |     100 |       25 |     100 |     100 | 4                
 src/modules/UserForm       |     100 |      100 |     100 |     100 |                  
  FormControls.tsx          |     100 |      100 |     100 |     100 |                  
  index.tsx                 |     100 |      100 |     100 |     100 |                  
 src/modules/UserInfo       |     100 |      100 |     100 |     100 |                  
  index.tsx                 |     100 |      100 |     100 |     100 |                  
 src/store                  |     100 |      100 |     100 |     100 |                  
  index.ts                  |     100 |      100 |     100 |     100 |                  
  rootReducer.ts            |     100 |      100 |     100 |     100 |                  
  rootSaga.ts               |     100 |      100 |     100 |     100 |                  
 src/utils                  |     100 |    95.23 |     100 |     100 |                  
  Lee.ts                    |     100 |      100 |     100 |     100 |                  
  addNewCellsToGameField.ts |     100 |      100 |     100 |     100 |                  
  createArrayBySize.ts      |     100 |      100 |     100 |     100 |                  
  createGameField.ts        |     100 |        0 |     100 |     100 | 6                
  delay.ts                  |     100 |        0 |     100 |     100 | 1                
  filterChainsByInd.ts      |     100 |      100 |     100 |     100 |                  
  generateCellsByCount.ts   |     100 |      100 |     100 |     100 |                  
  generateCellsByPercent.ts |     100 |      100 |     100 |     100 |                  
  getChainByInd.ts          |     100 |      100 |     100 |     100 |                  
  getChainDirection.ts      |     100 |    91.66 |     100 |     100 | 3                
  getChainsByInd.ts         |     100 |      100 |     100 |     100 |                  
  getHighlightedCells.ts    |     100 |      100 |     100 |     100 |                  
  getIndByPos.ts            |     100 |      100 |     100 |     100 |                  
  getNewCells.ts            |     100 |      100 |     100 |     100 |                  
  getOutdatedCells.ts       |     100 |      100 |     100 |     100 |                  
  getOutdatedChains.ts      |     100 |      100 |     100 |     100 |                  
  getPosByInd.ts            |     100 |      100 |     100 |     100 |                  
  index.ts                  |       0 |        0 |       0 |       0 |                  
  moveToCell.ts             |     100 |      100 |     100 |     100 |                  
  removeOutdatedChains.ts   |     100 |      100 |     100 |     100 |                  
  setCell.ts                |     100 |    71.42 |     100 |     100 | 1-2              
  shuffle.ts                |     100 |      100 |     100 |     100 |                  
  uuidv4.ts                 |     100 |      100 |     100 |     100 |                  
----------------------------|---------|----------|---------|---------|-------------------
Test Suites: 44 passed, 44 total
Tests:       170 passed, 170 total
Snapshots:   18 passed, 18 total
Time:        15.03 s
Ran all test suites.

```
### Stryker tests
```
----------------------------|---------|----------|-----------|------------|----------|---------|
File                        | % score | # killed | # timeout | # survived | # no cov | # error |
----------------------------|---------|----------|-----------|------------|----------|---------|
All files                   |   99.79 |        0 |       486 |          0 |        1 |     171 |
 App                        |  100.00 |        0 |        79 |          0 |        0 |      31 |
  AppBody.tsx               |  100.00 |        0 |         1 |          0 |        0 |       1 |
  AppBottom.tsx             |  100.00 |        0 |        13 |          0 |        0 |       3 |
  AppHeader.tsx             |     n/a |        0 |         0 |          0 |        0 |       1 |
  AppRouter.tsx             |  100.00 |        0 |         2 |          0 |        0 |       2 |
  appSaga.ts                |  100.00 |        0 |        47 |          0 |        0 |      13 |
  appSlice.ts               |  100.00 |        0 |        11 |          0 |        0 |       6 |
  index.tsx                 |  100.00 |        0 |         2 |          0 |        0 |       1 |
  initialState.ts           |  100.00 |        0 |         3 |          0 |        0 |       4 |
 components                 |  100.00 |        0 |        20 |          0 |        0 |       7 |
  Button.tsx                |  100.00 |        0 |         3 |          0 |        0 |       1 |
  Loading.tsx               |  100.00 |        0 |         6 |          0 |        0 |       4 |
  Select.tsx                |  100.00 |        0 |        11 |          0 |        0 |       2 |
 layout                     |  100.00 |        0 |         1 |          0 |        0 |       0 |
  Panel.ts                  |  100.00 |        0 |         1 |          0 |        0 |       0 |
 modules                    |  100.00 |        0 |       143 |          0 |        0 |      29 |
  Auth                      |  100.00 |        0 |        58 |          0 |        0 |      22 |
   AuthForm.tsx             |  100.00 |        0 |         9 |          0 |        0 |       5 |
   AuthLayout.tsx           |  100.00 |        0 |        13 |          0 |        0 |       2 |
   authSaga.ts              |  100.00 |        0 |        11 |          0 |        0 |       2 |
   authSlice.ts             |  100.00 |        0 |         4 |          0 |        0 |       4 |
   AuthStatus.tsx           |  100.00 |        0 |         7 |          0 |        0 |       1 |
   fakeAuthProvider.ts      |  100.00 |        0 |         9 |          0 |        0 |       7 |
   RequireAuth.tsx          |  100.00 |        0 |         5 |          0 |        0 |       1 |
  Cell                      |  100.00 |        0 |        55 |          0 |        0 |       2 |
   index.tsx                |  100.00 |        0 |        55 |          0 |        0 |       2 |
  GameField                 |  100.00 |        0 |        25 |          0 |        0 |       3 |
   index.tsx                |  100.00 |        0 |        25 |          0 |        0 |       3 |
  UserForm                  |  100.00 |        0 |         5 |          0 |        0 |       2 |
   index.tsx                |  100.00 |        0 |         5 |          0 |        0 |       2 |
 store                      |  100.00 |        0 |         3 |          0 |        0 |       0 |
  rootReducer.ts            |  100.00 |        0 |         1 |          0 |        0 |       0 |
  rootSaga.ts               |  100.00 |        0 |         2 |          0 |        0 |       0 |
 utils                      |  100.00 |        0 |       240 |          0 |        0 |     103 |
  addNewCellsToGameField.ts |  100.00 |        0 |         4 |          0 |        0 |       1 |
  createArrayBySize.ts      |  100.00 |        0 |         2 |          0 |        0 |       2 |
  createGameField.ts        |     n/a |        0 |         0 |          0 |        0 |       1 |
  delay.ts                  |  100.00 |        0 |         1 |          0 |        0 |       1 |
  filterChainsByInd.ts      |  100.00 |        0 |        23 |          0 |        0 |       6 |
  generateCellsByCount.ts   |  100.00 |        0 |         7 |          0 |        0 |       3 |
  generateCellsByPercent.ts |  100.00 |        0 |         2 |          0 |        0 |       2 |
  getChainByInd.ts          |  100.00 |        0 |        31 |          0 |        0 |      11 |
  getChainsByInd.ts         |  100.00 |        0 |         6 |          0 |        0 |       5 |
  getHighlightedCells.ts    |  100.00 |        0 |         2 |          0 |        0 |       1 |
  getIndByPos.ts            |  100.00 |        0 |         2 |          0 |        0 |       1 |
  getNewCells.ts            |  100.00 |        0 |        11 |          0 |        0 |       4 |
  getOutdatedCells.ts       |  100.00 |        0 |         1 |          0 |        0 |       3 |
  getOutdatedChains.ts      |  100.00 |        0 |         2 |          0 |        0 |       1 |
  getPosByInd.ts            |  100.00 |        0 |         8 |          0 |        0 |       1 |
  Lee.ts                    |  100.00 |        0 |        99 |          0 |        0 |      38 |
  moveToCell.ts             |  100.00 |        0 |         3 |          0 |        0 |       6 |
  removeOutdatedChains.ts   |  100.00 |        0 |        12 |          0 |        0 |       2 |
  setCell.ts                |  100.00 |        0 |         9 |          0 |        0 |      10 |
  shuffle.ts                |  100.00 |        0 |         8 |          0 |        0 |       2 |
  uuidv4.ts                 |  100.00 |        0 |         7 |          0 |        0 |       2 |
 index.tsx                  |    0.00 |        0 |         0 |          0 |        1 |       0 |
 Root.tsx                   |     n/a |        0 |         0 |          0 |        0 |       1 |
----------------------------|---------|----------|-----------|------------|----------|---------|

```
