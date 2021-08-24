import { CommonState } from './common';
import { HomeState } from './home';
import { WorldState } from './world';

export interface RootState {
  common: CommonState;
  home: HomeState;
  world: WorldState;
}
