import { render, screen } from '@testing-library/react';
import App from './App';

test('render title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Child App 1/i);
  expect(linkElement).toBeInTheDocument();
});
