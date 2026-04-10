import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/Gausa Technology/i)[0];
  expect(brandElement).toBeInTheDocument();
});
