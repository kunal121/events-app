import './card.css';
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ children, className }) => {
    return <div className={`card-container ${className}`}>{children}</div>;
};
