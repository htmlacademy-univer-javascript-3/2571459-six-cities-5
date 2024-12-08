import {useDispatch} from 'react-redux';
import {City} from '../Types/types.ts';
import {updateCity} from '../Store/actions.ts';
import {useStore} from '../hooks/useStore.ts';

type CityListProps = {
  cities: City[];
}

export function CityList({cities}: CityListProps) {
  const currentCity = useStore((state) => state.city);
  const dispatch = useDispatch();

  function onCityClick(city: City) {
    dispatch(updateCity({city}));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a
                className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={() => onCityClick(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
