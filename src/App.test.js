import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a Prompt element', () => {
  const {container} = render(<App />);
  const prompt = container.querySelector('.Prompt');
  expect(prompt).toBeInTheDocument();
});
