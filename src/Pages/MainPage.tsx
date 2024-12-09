import {Fragment} from 'react';
import {cities} from '../mocks/cities.ts';
import {OffersList} from '../Components/OffersList.tsx';
import {Map} from '../Components/Map.tsx';
import {CityList} from '../Components/CityList.tsx';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {MainEmptyPage} from './MainEmptyPage.tsx';
import {GetPlacesComparer, SortVariants} from '../Components/SortVariants.tsx';
import {store} from '../Store';
import {setHoveredOffer} from '../Store/actions.ts';


export function MainPage() {
  const hoveredOffer = useAppStoreSelector((state) => state.hoveredOffer);
  const activeCity = useAppStoreSelector((state) => state.city);
  const currentPlacesSortOption = useAppStoreSelector((state) => state.placesSortOptions);
  const offers = useAppStoreSelector((state) => state.offers
    .filter((offer) => offer.city.name === activeCity.name)
    .sort(GetPlacesComparer(currentPlacesSortOption))
  );
  if (offers.length === 0) {
    return <MainEmptyPage/>;
  }
  const handleListItemHover = (lastTitle: string) => {
    const currentPoint = offers.find((offer) =>
      offer.title === lastTitle,
    );
    store.dispatch(setHoveredOffer(currentPoint || null));
  };

  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <CityList cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
            <SortVariants/>
            <OffersList offers={offers} onListItemHover={handleListItemHover}/>
          </section>
          <div className="cities__right-section">
            <section className="map">
              <Map
                offers={offers}
                selectedOffer={hoveredOffer}
                height={'500px'}
                width={'500px'}
              />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
