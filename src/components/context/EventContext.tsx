import moment from 'moment';
import React, { createContext, useEffect, useState } from 'react';
import { MAX_SELECTED_EVENT, MOCK_URL_API } from '../../constants';
import { Event, EventContextProps } from '../../types';

export const EventContext = createContext<EventContextProps>({
    events: [],
    selectedEvents: [],
    isEventConflicting: () => false,
    selectEvent: () => {},
    removeEvent: () => {},
    isMaxEventSelected: false,
    isLoading: false,
});

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
    const [isLoading, setLoading] = useState(false);

    const isEventConflicting = (startTime: string, endTime: string): boolean =>
        selectedEvents.some(
            (selectedEvent) =>
                moment(endTime).isAfter(selectedEvent.start_time) &&
                moment(startTime).isBefore(selectedEvent.end_time)
        );

    const selectEvent = (event: Event): void => {
        setSelectedEvents([...selectedEvents, event]);
        setEvents(
            events.filter((currentEvent: Event) => currentEvent.id !== event.id)
        );
    };

    const removeEvent = (event: Event): void => {
        setSelectedEvents(
            selectedEvents.filter(
                (selectedEvent: Event) => selectedEvent.id !== event.id
            )
        );
        setEvents([...events, event]);
    };

    const isMaxEventSelected = selectedEvents.length === MAX_SELECTED_EVENT;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const res = await fetch(MOCK_URL_API);
                const events = await res.json();
                setEvents(events);
                setLoading(false);
            } catch (error) {
                console.error(
                    `Some error fetching events ${JSON.stringify(error)}`
                );
            }
        };
        fetchEvents();
    }, []);

    return (
        <EventContext.Provider
            value={{
                events,
                selectedEvents,
                isEventConflicting,
                selectEvent,
                removeEvent,
                isLoading,
                isMaxEventSelected,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
