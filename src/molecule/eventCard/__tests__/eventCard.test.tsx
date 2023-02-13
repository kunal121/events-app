import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import moment from 'moment';
import { EventCard } from '../index';

describe('EventCard', () => {
    const mockOnCtaClick = jest.fn();
    const mockEvent = {
        eventName: 'Test Event',
        eventCategory: 'Test Category',
        eventEndTime: moment().add(1, 'hours').toISOString(),
        eventStartTime: moment().toISOString(),
        eventId: 1,
        ctaText: 'Join',
        onCtaClick: mockOnCtaClick,
        isSecondaryCta: false,
    };

    it('renders correctly', () => {
        render(<EventCard {...mockEvent} />);

        expect(screen.getByText(mockEvent.eventName)).toBeInTheDocument();
        expect(screen.getByText(`(${mockEvent.eventCategory})`))
            .toBeInTheDocument;
        expect(
            screen.getByText(
                `${moment(mockEvent.eventStartTime).format(
                    'h:mm A'
                )} - ${moment(mockEvent.eventEndTime).format('h:mm A')}`
            )
        ).toBeVisible;
        expect(screen.getByText(mockEvent.ctaText)).toBeVisible();
    });

    it('calls onCtaClick when the button is clicked', () => {
        const { getByText } = render(<EventCard {...mockEvent} />);
        const joinButton = getByText(mockEvent.ctaText);
        fireEvent.click(joinButton);

        expect(mockOnCtaClick).toHaveBeenCalledWith({
            event_name: mockEvent.eventName,
            event_category: mockEvent.eventCategory,
            start_time: mockEvent.eventStartTime,
            end_time: mockEvent.eventEndTime,
            id: mockEvent.eventId,
        });
    });
});
