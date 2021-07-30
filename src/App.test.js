import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Perfiles de Usuario h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Perfiles de Usuario/i);
  expect(linkElement).toBeInTheDocument();
});
