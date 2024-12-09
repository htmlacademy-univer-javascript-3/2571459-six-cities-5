import {Fragment, useState} from 'react';
import {cities} from '../mocks/cities.ts';
import {OffersList} from '../Components/OffersList.tsx';
import {Map} from '../Components/Map.tsx';
import {CityList} from '../Components/CityList.tsx';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {City} from '../Types/City.ts';
import {MainEmptyPage} from './MainEmptyPage.tsx';
import {GetPlacesComparer, SortVariants} from '../Components/SortVariants.tsx';


export function MainPage() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
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
    const currentPoint = offers.map((x) => x.city).find((city) =>
      city.name === lastTitle,
    );
    setSelectedCity(currentPoint || null);
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
                points={offers.map((x) => x.city)}
                selectedPoint={selectedCity}
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
