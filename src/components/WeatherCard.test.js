import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('renders min', () => {
  render(<WeatherCard minTemp={12} maxTemp={34} applicableDate="2021/02/02" />);
  const minElement = screen.getByText(/min/i);
  expect(minElement).toBeInTheDocument();
});

test('renders max', () => {
  render(<WeatherCard minTemp={12} maxTemp={34} applicableDate="2021/02/02" />);
  const maxElement = screen.getByText(/max/i);
  expect(maxElement).toBeInTheDocument();
});

test('renders date', () => {
  render(<WeatherCard minTemp={12} maxTemp={34} applicableDate="2021/02/02" />);
  const dateElement = screen.getByText(/2021/i);
  expect(dateElement).toBeInTheDocument();
});
