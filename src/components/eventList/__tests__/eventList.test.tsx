import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { EventList } from '..';
import { EventContext } from '../../context/EventContext';

const mockEvents = [
    {
        id: 1,
        event_name: 'Event 1',
        event_category: 'Category 1',
        start_time: '2023-02-12T08:00:00.000Z',
        end_time: '2023-02-12T10:00:00.000Z',
    },
    {
        id: 2,
        event_name: 'Event 2',
        event_category: 'Category 2',
        start_time: '2023-02-12T09:00:00.000Z',
        end_time: '2023-02-12T11:00:00.000Z',
    },
    {
        id: 3,
        event_name: 'Event 3',
        event_category: 'Category 3',
        start_time: '2023-02-12T12:00:00.000Z',
        end_time: '2023-02-12T14:00:00.000Z',
    },
];

const mockSelectEvent = jest.fn();
const mockIsEventConflicting = jest.fn().mockReturnValue(false);
const mockIsMaxEventSelected = false;
const mockSelectedEvents = [] as any;
const mockRemoveEvent = jest.fn();

const mockEventContext = {
    events: mockEvents,
    selectEvent: mockSelectEvent,
    isEventConflicting: mockIsEventConflicting,
    isMaxEventSelected: mockIsMaxEventSelected,
    selectedEvents: mockSelectedEvents,
    removeEvent: mockRemoveEvent,
    isLoading: false,
};

describe('EventList', () => {
    it('renders correctly with events', () => {
        render(
            <EventContext.Provider value={mockEventContext}>
                <EventList />
            </EventContext.Provider>
        );

        expect(screen.getByText('All Events')).toBeInTheDocument();
        mockEvents.forEach((event) => {
            expect(screen.getByText(event.event_name)).toBeInTheDocument();
            expect(
                screen.getByText(`(${event.event_category})`)
            ).toBeInTheDocument();
        });
        expect(screen.getAllByText(`Select`).length).toBe(3);
    });
});
