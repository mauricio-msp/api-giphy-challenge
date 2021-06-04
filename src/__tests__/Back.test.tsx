import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { BackHome } from '../components/Back';

describe('Button', () => {
  it('Should show "Voltar" text', () => {
    render(
      <MemoryRouter>
        <BackHome />
      </MemoryRouter>
    );

    expect(screen.queryByText('Voltar')).toBeTruthy();
  });

  it('Should show "voltar" text', () => {
    render(
      <MemoryRouter>
        <BackHome />
      </MemoryRouter>
    );

    expect(screen.queryByText('voltar')).not.toBeTruthy();
  });
});
