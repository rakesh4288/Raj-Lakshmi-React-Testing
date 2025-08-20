import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('App Component - Case 1:  Renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("App Component - Case 2: Testing Heading", ()=> {
  render(<App/>);
  const heading = screen.getByText(/First React App/i);
  expect(heading).toBeInTheDocument();
});

test("App Component - Case 3: Testing Movie Banner image", () =>{
  render(<App/>);
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
  const bannerTitle = screen.getByTitle(/Kishkindha Kaandam Movie/i);
  expect(bannerTitle).toBeInTheDocument();
});

test("App Component - Case 3: Testing src attribute for logo", ()=>{
  render(<App/>);
  const logo = screen.getByAltText('logo');
  expect(logo).toHaveAttribute('src');
});

// test("App Component - Case 3: Caputuring the Snapshot", () => {
//   const {container} = render(<App />); // we need to assign this render function into one variable
//   expect(container).toMatchSnapshot();
// });

test('Case 4: renders Home component for default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test('Case 5: renders About component for /rtl-getAllByRole route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/about/i)).toBeInTheDocument();
});