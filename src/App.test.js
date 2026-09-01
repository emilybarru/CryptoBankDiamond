// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoBankDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoBankDiamond/i);
    expect(titleElement).toBeInTheDocument();
});
