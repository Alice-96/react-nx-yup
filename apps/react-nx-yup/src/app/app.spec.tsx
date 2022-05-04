import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('render', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
