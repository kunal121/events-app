import './button.css';
import { ButtonProps, ButtonVariant } from './types';

export const Button: React.FC<ButtonProps> = ({
    variant = ButtonVariant.PRIMARY,
    disabled = false,
    className = `button-default ${variant}`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { },
    children,
    testId,
}) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            data-testid={testId}
        >
            {children}
        </button>
    );
};
