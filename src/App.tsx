import {Main} from './Components/Main.tsx';
import {Layout} from './Layouts/Layout.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from './Types/AppRoute.tsx';
import {NotFoundPage} from './Pages/NotFoundPage.tsx';
import {FavoritesPage} from './Pages/FavoritesPage.tsx';
import {OfferPage} from './Pages/OfferPage.tsx';
import {LoginPage} from './Pages/LoginPage.tsx';
import {PrivateRoute} from './Layouts/PrivateRoute.tsx';
import {AuthorizationStatus} from './Types/AuthorizationStatus.tsx';
import {Offers} from './mocks/offers.ts';
import {Favorites} from './mocks/favorites.ts';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<Main placesToStayCount={320} offers={Offers}/>}/>
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorisationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favoritesMocks={Favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}
