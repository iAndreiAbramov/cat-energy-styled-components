import React from 'react';

import { StyledInput, StyledInputLabel } from './Input.styled';

export interface IInputProps {
    labelText: string;
    type: 'text' | 'email';
    isIncorrect?: boolean;
    width?: string;
    placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({
    type,
    labelText,
    isIncorrect,
    width,
    placeholder,
}) => {
    return (
        <StyledInputLabel>
            <span>{labelText}</span>
            <StyledInput
                isIncorrect={isIncorrect}
                type={type}
                width={width}
                placeholder={placeholder}
            />
        </StyledInputLabel>
    );
};
