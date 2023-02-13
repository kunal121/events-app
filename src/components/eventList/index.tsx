import React, { useContext } from 'react';
import { EventCard } from '../../molecule/eventCard';
import { EventContext } from '../context/EventContext';
import './list.css';

export const EventList: React.FC = () => {
    const {
        events,
        selectEvent,
        isEventConflicting,
        isMaxEventSelected,
        isLoading,
    } = useContext(EventContext);

    return (
        <div className='list-container'>
            <h3 className='event-list-heading'>All Events</h3>
            {isLoading ? (
                <div className='loading-container'>Loading...</div>
            ) : (
                <div className='event-list'>
                    {events.map((event) => {
                        const {
                            event_name: eventName,
                            event_category: eventCategory,
                            id: eventId,
                            start_time: startTime,
                            end_time: endTime,
                        } = event;
                        return (
                            <EventCard
                                ctaText='Select'
                                onCtaClick={() => selectEvent(event)}
                                key={eventId}
                                eventName={eventName}
                                eventCategory={eventCategory}
                                eventId={eventId}
                                eventStartTime={startTime}
                                eventEndTime={endTime}
                                disabled={
                                    isEventConflicting(startTime, endTime) ||
                                    isMaxEventSelected
                                }
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
