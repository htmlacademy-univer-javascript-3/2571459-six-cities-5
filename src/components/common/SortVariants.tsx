import {useState} from 'react';
import {useAppStoreSelector} from '@hooks';
import {store} from '@store';
import {setPlacesSortOptions} from '@store-actions';
import {Offer} from '@types';
import {PlacesSortOptions} from '@constants';

export function GetPlacesComparer(currentOption: PlacesSortOptions) {
  switch (currentOption) {
    case PlacesSortOptions.Default:
      return () => 0;
    case PlacesSortOptions.PriceLowToHigh:
      return (a: Offer, b: Offer) => a.price - b.price;
    case PlacesSortOptions.PriceHighToLow:
      return (a: Offer, b: Offer) => b.price - a.price;
    case PlacesSortOptions.TopRatedFirst:
      return (a: Offer, b: Offer) => b.rating - a.rating;
  }
}

const optionsList = Object.values(PlacesSortOptions);

export function SortVariants() {
  const [isShow, setIsShow] = useState(false);
  const currentOption = useAppStoreSelector((state) => state.app.placesSortOptions);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsShow(!isShow)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                    Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isShow &&
      <ul className="places__options places__options--custom places__options--opened">
        {optionsList.map((option) =>
          (
            <li
              key={option}
              className={`places__option ${option === currentOption && 'places__option--active'}`}
              tabIndex={0}
              onClick={() => store.dispatch(setPlacesSortOptions(option))}
            >{option}
            </li>
          ))}
      </ul>}
    </form>
  );
}
