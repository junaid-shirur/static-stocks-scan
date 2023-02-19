import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useQuery } from 'react-query';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from '../components/Home';

// mock the useQuery hook
jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

// mock the getStockDetails function
jest.mock('../remote', () => ({
  getStockDetails: jest.fn(),
}));

// describe('Home', () => {
//   // set up some sample data to use in the tests
//   const sampleData = [
//     { id: 1, name: 'Stock 1', color: 'red', tag: 'New' },
//     { id: 2, name: 'Stock 2', color: 'green', tag: 'Popular' },
//     { id: 3, name: 'Stock 3', color: 'blue', tag: 'Hot' },
//   ];

//   beforeEach(() => {
//     // reset the mock implementation for each test
//     jest.resetAllMocks();
//   });

//   it('renders a loading spinner when data is being fetched', () => {
//     useQuery.mockReturnValue({
//       data: undefined,
//       status: 'loading',
//       error: undefined,
//     });

//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <Home />
//       </MemoryRouter>
//     );

//     expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
//   });

//   it('renders an error message when data fetch fails', () => {
//     useQuery.mockReturnValue({
//       data: undefined,
//       status: 'error',
//       error: new Error('Failed to fetch data'),
//     });

//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <Home />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('something went wrong')).toBeInTheDocument();
//   });

//   it('renders a list of stocks on the home page', () => {
//     useQuery.mockReturnValue({
//       data: sampleData,
//       status: 'success',
//       error: undefined,
//     });

//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <Home />
//       </MemoryRouter>
//     );

//     // verify that the list of stocks is rendered
//     expect(screen.getAllByRole('listitem')).toHaveLength(3);
//     expect(screen.getByText('Stock 1')).toBeInTheDocument();
//     expect(screen.getByText('Stock 2')).toBeInTheDocument();
//     expect(screen.getByText('Stock 3')).toBeInTheDocument();
//   });

//   it('navigates to the details page when a stock is clicked', () => {
//     useQuery.mockReturnValue({
//       data: sampleData,
//       status: 'success',
//       error: undefined,
//     });

//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <Home />
//       </MemoryRouter>
//     );

//     // click on the first stock in the list
//     userEvent.click(screen.getByText('Stock 1'));

//     // verify that we're redirected to the details page for that stock
//     expect(screen.getByText('Stock 1 Details')).toBeInTheDocument();
//   });

//   it('renders the details page for a specific stock', () => {
//     useQuery.mockReturnValue({
//       data: sampleData,
//       status: 'success',
//       error: undefined,
//     });

//     render(
//       <MemoryRouter initialEntries={['/details/1']}>
//         <Route path="/details/:id">
//           <Home />
//         </Route>
//       </MemoryRouter>
//     );

//     // verify that the details page for the first stock is rendered
//     expect(screen.getByText('Stocks'))
