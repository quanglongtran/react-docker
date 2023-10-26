import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/* global test:readonly */
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    /* global expect:readonly */
    expect(linkElement).toBeInTheDocument();
});
