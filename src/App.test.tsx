import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const homePageElement = screen.getByText(/Welcome to the stock app/i);
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders the detail page when the URL contains "/details/:id"', () => {
    render(
      <BrowserRouter >
        <App />
      </BrowserRouter>
    );

    const detailPageElement = screen.getByText(/Stock Details/i);
    expect(detailPageElement).toBeInTheDocument();
  });

  it('renders the variables page when the URL contains "/variables/:id/:key/:criteriaIdx"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const variablesPageElement = screen.getByText(/Variable Details/i);
    expect(variablesPageElement).toBeInTheDocument();
  });
});