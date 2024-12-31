import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
