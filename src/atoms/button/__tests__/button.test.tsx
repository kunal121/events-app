import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../index';

describe('Button componet should render and work proeprly', () => {
    test('button should render and default props should be correct', () => {
        render(<Button>Test button</Button>);
        const button = screen.getByText('Test button');
        expect(button).toBeVisible();
    });
    test('button should work fine when expected disabled prop is passed', () => {
        render(<Button disabled>Test button</Button>);
        const button = screen.getByText('Test button');
        expect(button).toBeDisabled();
    });
    test('onclick functionality should work fine as expected', () => {
        const onclick = jest.fn();
        render(<Button onClick={onclick}>Test button</Button>);
        const button = screen.getByText('Test button');
        fireEvent.click(button);
        expect(onclick).toBeCalled();
    });
});
