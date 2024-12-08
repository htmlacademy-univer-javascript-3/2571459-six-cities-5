import {Fragment, useState} from 'react';
import {Point} from '../mocks/MockHelpers.ts';
import {cities} from '../mocks/cities.ts';
import {Offers} from '../mocks/offers.ts';
import {OffersList} from '../Components/OffersList.tsx';
import {Map} from '../Components/Map.tsx';
import {CityList} from '../Components/CityList.tsx';
import {useStore} from '../hooks/useStore.ts';


export function MainPage() {
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
  const handleListItemHover = (lastTitle: string) => {
    const currentPoint = Offers.map((x) => x.point).find((cardMock) =>
      cardMock.name === lastTitle,
    );
    setSelectedPoint(currentPoint || null);
  };
  const activeCity = useStore((state) => state.city);
  const offers = useStore((state) => state.offers
    .filter((offer) => offer.point.cityName === activeCity.name)
  );

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
            <OffersList mocks={offers} onListItemHover={handleListItemHover}/>
          </section>
          <div className="cities__right-section">
            <section className="map">
              <Map
                points={offers.map((x) => x.point)}
                selectedPoint={selectedPoint}
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
