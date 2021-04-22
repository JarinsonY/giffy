import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  render(<App />)
  const title = await screen.findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
});


/* test('home work as expected', () => {
  const {container} = render(<App />)
  const gifLink = await waitForElement(
      () => container.querySelector('.Gif-link')
  )

  expect(gifLink).toBeVisible()
}); */

/* test('search form cloud be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' } })
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
}) */