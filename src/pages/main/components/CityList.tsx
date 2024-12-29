import {useDispatch} from 'react-redux';
import {setSelectedCity} from '@store-actions';
import {useAppStoreSelector} from '@hooks';
import {City} from '@types';
import {Link} from 'react-router-dom';
import {AppRoute} from '@constants';

type CityListProps = {
  cities: City[];
}

export function CityList({cities}: CityListProps) {
  const currentCity = useAppStoreSelector((state) => state.app.selectedCity);
  const dispatch = useDispatch();

  function onCityClick(city: City) {
    dispatch(setSelectedCity(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <Link
                className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
                to={AppRoute.Main}
                onClick={() => onCityClick(city)}
              >
                <span>{city.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
