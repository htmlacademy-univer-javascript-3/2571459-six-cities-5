import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import {store} from './Store';
import {fetchOffers} from './api/ApiClient.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());

root.render(
  <App/>
);
