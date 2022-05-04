import Top from './Top';
import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

describe('Top test', () => {
  it('render', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
