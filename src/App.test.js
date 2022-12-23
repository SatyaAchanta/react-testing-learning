import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeAll(() => {
});

test ('initial conditions', () => {
  render(<App />);
  // check button starts enabled
  const buttonElement = screen.getByRole('button', { name: /change to blue/i });
  expect(buttonElement).toBeEnabled();

  // check checkbox is disabled
  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();
});

test('button has correct initial color, and updates when clicked',  () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /change to blue/i });
  // expect(buttonElement).toHaveStyle({backgroundColor: 'red'});
  expect(buttonElement).toHaveClass('color-button');

  // should have backgroundColor when clicked on the button
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass('color-button');

  // should change text to `change to red`
  expect(buttonElement).toHaveTextContent(/change to red/i);
});

test('button should be disabled after checkbox is checked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /change to blue/i });
  const checkboxElement = screen.getByRole('checkbox');

  // at this point, checkbox is unchecked
  // So click on checkbox and button should be disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  // We click again on checkbox
  // to test whether button is enabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});


