import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from '../Store';


type State = ReturnType<typeof store.getState>;
export const useStore: TypedUseSelectorHook<State> = useSelector;
