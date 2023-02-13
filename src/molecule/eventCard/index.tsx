import moment from 'moment';
import React from 'react';
import { Button } from '../../atoms/button';
import { ButtonVariant } from '../../atoms/button/types';
import { Card } from '../../atoms/card';
import './eventCard.css';
import { EventCardProps } from './types';

export const EventCard: React.FC<EventCardProps> = ({
    eventName,
    eventCategory,
    eventEndTime,
    eventStartTime,
    eventId,
    ctaText,
    onCtaClick,
    isSecondaryCta,
    disabled = false,
}) => {
    const onButtonClick = () => {
        const eventPayload = {
            event_name: eventName,
            event_category: eventCategory,
            start_time: eventStartTime,
            end_time: eventEndTime,
            id: eventId,
        };

        onCtaClick(eventPayload);
    };

    const highlightCharacter = eventCategory.charAt(0).toUpperCase();
    const startTime = moment(eventStartTime).format('h:mm A');
    const endTime = moment(eventEndTime).format('h:mm A');

    return (
        <Card
            className={
                disabled
                    ? 'event-card-container event-card-container--disabled'
                    : 'event-card-container'
            }
        >
            <div className='card-content-container'>
                <span className='highlighted-character'>
                    {highlightCharacter}
                </span>
                <span className='highlighted-character--border-right'></span>
                <div className='card-content'>
                    <div className='event-name'>{eventName}</div>
                    <div>({eventCategory})</div>
                    <div>{`${startTime} - ${endTime}`}</div>
                </div>
            </div>
            <div className='event-card-footer'>
                <Button
                    onClick={onButtonClick}
                    variant={
                        isSecondaryCta
                            ? ButtonVariant.SECONDARY
                            : ButtonVariant.PRIMARY
                    }
                    disabled={disabled}
                >
                    {ctaText}
                </Button>
            </div>
        </Card>
    );
};
