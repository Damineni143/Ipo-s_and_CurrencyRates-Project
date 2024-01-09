import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './SignUp';

describe('SignUp Component', () => {
  test('renders the signup form', () => {
    render(<SignUp />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter the email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter the password')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
  });

  test('calls handleSignup when Signup button is clicked', () => {
    const localStorageMock = jest.spyOn(Storage.prototype, 'setItem');
    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));

    render(<SignUp />);
    userEvent.type(screen.getByPlaceholderText('Enter your name'), 'John Doe');
    userEvent.type(screen.getByPlaceholderText('Enter the email address'), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText('Enter the password'), 'password');
    userEvent.click(screen.getByText('Signup'));
    expect(localStorageMock).toHaveBeenCalledWith('userDetails', '{"name":"John Doe","email":"john@example.com","password":"password"}');
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  test('redirects to login when "Login" link is clicked', () => {
    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));

    render(<SignUp />);
    userEvent.click(screen.getByText('Login'));
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
