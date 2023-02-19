import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useQuery } from 'react-query';
import Home from '../components/Home';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import App from '../App';

// mock the useQuery hook
// jest.mock('react-query', () => ({
//   useQuery: jest.fn(),
// }));

// // mock the getStockDetails function
// jest.mock('../remote', () => ({
//   getStockDetails: jest.fn(),
// }));

test('renders the app', () => {
  const queryClient = new QueryClient();

  const { getByTestId } = render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  );

  expect(getByTestId('app')).toBeInTheDocument();
});

describe('Home component', () => {
  test('renders Home component', () => {
    const { getByTestId } = render(<Home />);
    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });
});
