import React, { useContext } from 'react';
import { EventCard } from '../../molecule/eventCard';
import { EventContext } from '../context/EventContext';

export const SelectedEventList: React.FC = () => {
    const { selectedEvents, removeEvent } = useContext(EventContext);
    return (
        <div className='list-container'>
            <h3 className='event-list-heading'>Selected Events</h3>
            {selectedEvents.length === 0 ? (
                <div className='loading-container'>No Events Selected</div>
            ) : (
                <div className='event-list'>
                    {selectedEvents.map((event) => {
                        const {
                            event_name: eventName,
                            event_category: eventCategory,
                            id: eventId,
                            start_time: startTime,
                            end_time: endTime,
                        } = event;
                        return (
                            <EventCard
                                ctaText='Remove'
                                onCtaClick={() => removeEvent(event)}
                                key={eventId}
                                eventName={eventName}
                                eventCategory={eventCategory}
                                eventId={eventId}
                                eventStartTime={startTime}
                                eventEndTime={endTime}
                                isSecondaryCta={true}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
