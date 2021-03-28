import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders website name', () => {
  render(<Header />);
  const linkElement = screen.getByText(/mini forecast weather/i);
  expect(linkElement).toBeInTheDocument();
});
