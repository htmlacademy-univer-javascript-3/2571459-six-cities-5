import {Layout} from './Layouts/Layout.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFoundPage} from './Pages/NotFoundPage.tsx';
import {FavoritesPage} from './Pages/FavoritesPage.tsx';
import {OfferPage} from './Pages/OfferPage.tsx';
import {LoginPage} from './Pages/LoginPage.tsx';
import {PrivateRoute} from './Layouts/PrivateRoute.tsx';
import {Favorites} from './mocks/favorites.ts';
import {MainPage} from './Pages/MainPage.tsx';
import {store} from './Store';
import {AppRoute} from './constants/AppRoute.ts';
import {AuthorizationStatus} from './constants/AuthorizationStatus.ts';
import {fetchOffersAction} from './api/ApiClient.ts';
import {useAppStoreSelector} from './hooks/useStore.ts';
import {Spinner} from './Components/Spinner.tsx';


store.dispatch(fetchOffersAction());

export function App() {
  const isLoading = useAppStoreSelector((state) => state.loading);
  if (isLoading){
    return(<Spinner />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<MainPage/>}/>
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorisationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favoritesMocks={Favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage nearbyOffers={[]}/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
