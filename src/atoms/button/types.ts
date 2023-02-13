import { MouseEventHandler, ReactNode } from 'react';

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export interface ButtonProps {
    variant?: ButtonVariant;
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
    size?: ButtonSize;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    testId?: string;
}
