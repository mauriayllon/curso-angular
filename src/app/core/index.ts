import {ActionReducerMap} from '@ngrx/store';
import * as fromHome from '../modules/pages/modules/home/store/home.reducer';
export const reducers: ActionReducerMap<any> = {
   home: fromHome.reducer
};