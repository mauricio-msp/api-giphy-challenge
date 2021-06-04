import { render, screen } from '@testing-library/react';
import { GiphyCard } from '../components/GiphyCard';

describe('GiphyCard', () => {
  it('Should return a list of card with images and alternate text', () => {
    const giphys = { 
      id: '1',
      title: 'alt',
      images: {
        fixed_height: {
          url: 'http://img'
        }
      }
    };
    
    render(
      <GiphyCard 
        giphy={giphys} 
        cardWidth={300} 
        imgCardWidth="100%" 
        imgCardHeight={200}  
      />
    );

    expect(screen.queryByAltText('alt')).toBeTruthy();
  });

  it('Not should return a list of card with images and alternate text', () => {
    render(
      <GiphyCard 
        giphy={{}} 
        cardWidth={300} 
        imgCardWidth="100%" 
        imgCardHeight={200}  
      />
    );

    expect(screen.queryByAltText('alt')).not.toBeTruthy();
  });
});
