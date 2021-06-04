import { render, screen } from '@testing-library/react';
import { EmptyGiphy } from '../components/EmptyGiphy';

describe('EmptyGiphy', () => {
  it('Should show the message passed as parameter', () => {
    render(
      <EmptyGiphy 
        listIsEmpty={[]} 
        positionTop={20} 
        message="describe" 
        color="#FFF"   
      />
    );

    expect(screen.queryByText('describe')).toBeTruthy();
  });

  it('Not should show the message passed as parameter', () => {
    render(
      <EmptyGiphy 
        listIsEmpty={['testing']} 
        positionTop={20} 
        message="describe" 
        color="#FFF"   
      />
    );

    expect(screen.queryByText('describe')).not.toBeTruthy();
  });
});
