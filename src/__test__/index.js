import { render, screen, waitForElement } from '@testing-library/react';
import App from '../App';

test('home work as expected', () => {
  const {container} = render(<App />)
  const gifLink = await waitForElement(
      () => container.querySelector('.Gif-link')
  )

  expect(title).toBeInTheDocument()
});
