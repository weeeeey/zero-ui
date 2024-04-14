import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '@/app/page'; // Adjust this import path to match your file structure

describe('HomePage', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('React')).toBeInTheDocument();
    });

    it('opens dialog when "Open" is clicked', () => {
        const { getByText } = render(<HomePage />);
        fireEvent.click(getByText('Open'));
        expect(getByText('Title')).toBeInTheDocument();
        expect(getByText('description')).toBeInTheDocument();
    });

    it('has correct default values in the dialog', () => {
        const { getByText, getByLabelText } = render(<HomePage />);
        fireEvent.click(getByText('Open'));
        expect(getByLabelText('Name')).toHaveValue('Pedro Duarte');
        expect(getByLabelText('Username')).toHaveValue('@peduarte');
    });

    it('closes dialog when "Save changes" is clicked', () => {
        const { getByText, queryByText } = render(<HomePage />);
        fireEvent.click(getByText('Open'));
        fireEvent.click(getByText('Save changes'));
        expect(queryByText('Title')).not.toBeInTheDocument();
    });
});
