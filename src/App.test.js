// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuillQuery title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuillQuery/i);
    expect(titleElement).toBeInTheDocument();
});
