import { render, screen } from '@testing-library/react';
import { Loader } from '../components/Loader';

describe('Loader', () => {
  it('Should be showing when "isLoad" is true', () => {
    render(<Loader isLoad={true} />);

    expect(screen.queryByText('Loading...')).toBeTruthy();
  });

  it('Should be showing when "isLoad" is false', () => {
    render(<Loader isLoad={false} />);

    expect(screen.queryByText('Loading...')).not.toBeTruthy();
  });
});
