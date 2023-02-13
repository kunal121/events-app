import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {
    act,
    cleanup,
    queryByText,
    render,
    screen,
} from '@testing-library/react';
import { EventList } from '../../eventList';
import { EventProvider } from '../EventContext';

const mockResponse = [
    {
        id: 1,
        start_time: '2022-12-17 10:00:00',
        end_time: '2022-12-17 11:00:00',
        event_name: '100m stroke',
        event_category: 'swimming',
    },
    {
        id: 2,
        start_time: '2022-12-17 10:00:00',
        end_time: '2022-12-17 11:00:00',
        event_name: '101m stroke',
        event_category: 'swimming',
    },
];

beforeEach(() => {
    const mockFetchPromise = Promise.resolve({
        json: jest.fn().mockResolvedValue(mockResponse),
    });
    window.fetch = jest.fn(() => mockFetchPromise) as any;
    jest.mock('moment', () => ({
        ...jest.requireActual('moment'),
        isAfter: jest.fn(),
        isBefore: jest.fn(),
    }));
});

afterEach(cleanup);

describe('EventProvider', () => {
    it('should render children', async () => {
        await act(async () => {
            render(
                <EventProvider>
                    <div>Hello World</div>
                </EventProvider>
            );
        });

        expect(await screen.findByText('Hello World')).toBeInTheDocument();
    });

    it('should fetch events on mount', async () => {
        await act(async () => {
            render(
                <EventProvider>
                    <EventList />
                </EventProvider>
            );
        });
        expect(
            await screen.findByText(mockResponse[0].event_name)
        ).toBeInTheDocument();
    });

    it('should select an event', async () => {
        const { findAllByText } = render(
            <EventProvider>
                <EventList />
            </EventProvider>
        );
        const eventEl = await findAllByText('Select');
        act(() => {
            eventEl[0].click();
        });
        expect(
            queryByText(eventEl[0], mockResponse[0].event_name)
        ).not.toBeInTheDocument();
    });

    it('Overlapping event should be disabled', async () => {
        const { findAllByText, findByText } = render(
            <EventProvider>
                <EventList />
            </EventProvider>
        );
        const eventEl = await findAllByText('Select');
        act(() => {
            eventEl[0].click();
        });
        expect(eventEl[1]).toBeDisabled();
    });
});
