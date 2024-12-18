import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from '@store';


type State = ReturnType<typeof store.getState>;
export const useAppStoreSelector: TypedUseSelectorHook<State> = useSelector;
