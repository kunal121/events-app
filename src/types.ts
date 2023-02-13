export interface Event {
    id: number;
    event_name: string;
    event_category: string;
    start_time: string;
    end_time: string;
}

export interface EventContextProps {
    events: Event[];
    selectedEvents: Event[];
    isEventConflicting: (startTime: string, endTime: string) => boolean;
    selectEvent: (event: Event) => void;
    removeEvent: (event: Event) => void;
    isMaxEventSelected: boolean;
    isLoading: boolean;
}
