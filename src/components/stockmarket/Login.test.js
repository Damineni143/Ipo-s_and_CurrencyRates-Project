import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

test('calls handleLogin when Login button is clicked', () => {
  const handleLoginMock = jest.fn();
  jest.mock('./Login', () => ({
    __esModule: true,
    default: (props) => <div {...props} handleLogin={handleLoginMock} />, 
  }));

  render(<Login />);
  const loginButton = screen.getByText('Login');
  fireEvent.click(loginButton);
  expect(handleLoginMock).toHaveBeenCalled();
});
