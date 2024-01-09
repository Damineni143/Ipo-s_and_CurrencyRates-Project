
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import IpoCalendar from './IpoCalendar';

jest.mock('axios');

describe('IpoCalendar Component', () => {
  it('renders IPO data correctly', async () => {
    const mockIpoData = [
      {
        companyName: 'Mock Company',
        symbol: 'MCK',
        latestPrice: 100.0,
        currency: 'USD',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockIpoData });

    render(<IpoCalendar />);
    await act(async () => {
      userEvent.selectOptions(screen.getByLabelText('Select The options:'), 'ipo');
      await waitFor(() => screen.getByText('Loading...'));
    });

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    expect(screen.getByText('Mock Company')).toBeInTheDocument();
    expect(screen.getByText('Symbol: MCK')).toBeInTheDocument();
    expect(screen.getByText('Latest Price: 100.0')).toBeInTheDocument();
  });

  it('renders Currency Rate data correctly', async () => {
    const mockCurrencyData = [
      {
        symbol: 'USDCAD',
        rate: 1.33659,
        timestamp: 1704797539094,
        isDerived: false,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockCurrencyData });

    render(<IpoCalendar />)
    await act(async () => {
      userEvent.selectOptions(screen.getByLabelText('Select The options:'), 'currencyRates');
      await waitFor(() => screen.getByText('Loading...'));
    });

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText('USDCAD')).toBeInTheDocument();
    expect(screen.getByText('Rate: 1.33659')).toBeInTheDocument();
  });

  it('handles API error', async () => {
    const errorMessage = 'Error fetching data';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    render(<IpoCalendar />);
    await act(async () => {
      userEvent.selectOptions(screen.getByLabelText('Select The options:'), 'ipo');
      await waitFor(() => screen.getByText('Loading...'));
    });
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });
});
