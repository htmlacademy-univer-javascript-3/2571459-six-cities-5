import { render } from '@testing-library/react';
import { Spinner } from '@components';

describe('Spinner', () => {
  it('renders correctly', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
