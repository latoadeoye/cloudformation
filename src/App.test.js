// eslint-disable-next-line no-undef
// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-lone-blocks
butto=buttonimport; { render, screen } 'from={_FormDataEvent:@testing-library/react}';
import App from './App';

test('renders learn react link', () => {

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
