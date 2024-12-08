import {Fragment, useState} from 'react';
import {cities} from '../mocks/cities.ts';
import {OffersList} from '../Components/OffersList.tsx';
import {Map} from '../Components/Map.tsx';
import {CityList} from '../Components/CityList.tsx';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {City} from '../Types/City.ts';


export function MainPage() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const activeCity = useAppStoreSelector((state) => state.city);
  const offers = useAppStoreSelector((state) => state.offers
    .filter((offer) => offer.city.name === activeCity.name)
  );
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                    Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
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
