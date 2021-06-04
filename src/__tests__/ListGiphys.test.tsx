import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ListGiphys } from '../components/ListGiphys';

describe('ListGiphys', () => {
  it('Should return a list of images with alternate text', () => {
    const giphys = [
      { 
        id: '1',
        title: 'alt',
        images: {
          fixed_height: {
            url: 'http://img'
          }
        }
      },
    ];
    
    render(
      <MemoryRouter>
        <ListGiphys giphys={giphys} />
      </MemoryRouter>
    );

    expect(screen.queryByAltText('alt')).toBeTruthy();
  });

  it('Not should return a list of images with alternate text', () => {
    render(
      <MemoryRouter>
        <ListGiphys giphys={[]} />
      </MemoryRouter>
    );

    expect(screen.queryByAltText('alt')).not.toBeTruthy();
  });
});
