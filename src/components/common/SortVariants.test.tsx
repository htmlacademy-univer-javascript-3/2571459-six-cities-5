import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SortVariants } from '@components';
import { store } from '@store';

describe('SortVariants', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SortVariants />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
