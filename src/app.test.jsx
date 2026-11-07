import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Start every test with empty storage, so saved projects can't leak between tests.
beforeEach(() => {
  localStorage.clear();
});

test('shows the three starter projects', () => {
  render(<App />);
  // Each project is a list item.
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('search filters the list', async () => {
  const user = userEvent.setup();
  render(<App />);

  // Find the box the way a person would: by its label.
  await user.type(screen.getByLabelText(/search projects/i), 'tidewatch');

  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('Tidewatch')).toBeInTheDocument();
});

test('shows a message when nothing matches', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText(/search projects/i), 'zzzz');

  expect(screen.getByText(/no projects match/i)).toBeInTheDocument();
});