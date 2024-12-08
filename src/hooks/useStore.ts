import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from '../Store';


type State = ReturnType<typeof store.getState>;
export const useAppStore: TypedUseSelectorHook<State> = useSelector;
