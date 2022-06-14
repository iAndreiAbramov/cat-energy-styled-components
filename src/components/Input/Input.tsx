import React from 'react';

import * as S from './Input.styled';

export interface IInputProps {
    name: string;
    value?: string | number;
    labelText: string;
    type: 'text' | 'email' | 'tel';
    isIncorrect?: boolean;
    width?: string;
    placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({
    name,
    value,
    type,
    labelText,
    isIncorrect,
    width,
    placeholder,
}) => {
    return (
        <S.StyledInputLabel>
            <span>{labelText}</span>
            <S.StyledInput
                isIncorrect={isIncorrect}
                type={type}
                width={width}
                placeholder={placeholder}
                name={name}
                value={value}
            />
        </S.StyledInputLabel>
    );
};
