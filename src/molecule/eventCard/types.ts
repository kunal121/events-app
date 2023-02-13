import { Event } from '../../types';

export interface EventCardProps {
    eventName: string;
    eventCategory: string;
    eventStartTime: string;
    eventEndTime: string;
    eventId: number;
    disabled?: boolean;
    onCtaClick: (event: Event) => void;
    isSecondaryCta?: boolean;
    ctaText: string;
}
