import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows the three starter projects', () => {
  render(<App />);
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('search filters the list', async () => {
  const user = userEvent.setup();
  render(<App />);

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

test('shows an error when the form is submitted empty', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /^add/i }));

  expect(screen.getByText(/enter a title and a description/i)).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('rejects a description shorter than 20 characters', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText(/title/i), 'Quick one');
  await user.type(screen.getByLabelText(/description/i), 'Too short');
  await user.click(screen.getByRole('button', { name: /^add/i }));

  expect(screen.getByText(/at least 20 characters/i)).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('adds a valid project to the top of the list', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText(/title/i), 'Brand New Work');
  await user.type(
    screen.getByLabelText(/description/i),
    'A description that is long enough to pass.'
  );
  await user.click(screen.getByRole('button', { name: /^add/i }));

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(4);
  expect(items[0]).toHaveTextContent('Brand New Work');
});
