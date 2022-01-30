import { IAppState } from '@src/App/model/IAppState';
import createGameField from '@src/utils/createGameField';

export const GAME_FIELD_SIZE = 9;

export const INIT_GAME_LEVEL = '1';
export const INIT_GAME_FIELD_PERCENT_FILLED = 0;

interface ISettings {
  percent: number;
  chain: number;
}
interface IProps {
  [key: string]: ISettings;
}
export const GAME_LEVEL_SETTINGS: IProps = {
  '1': { percent: 10, chain: 2 },
  '2': { percent: 20, chain: 3 },
  '3': { percent: 30, chain: 4 },
};

const initialState: IAppState = {
  userLevel: INIT_GAME_LEVEL,
  gameFieldPercentFilled: 0,
  gameFieldData: createGameField(GAME_FIELD_SIZE ** 2, INIT_GAME_FIELD_PERCENT_FILLED),
  outdatedCells: undefined,
  score: 0,
  selectedCell: undefined,
  isLoading: false,
  minChainLength: 0,
};

export default initialState;
