import React from 'react';

import * as S from './Checkbox.styled';

export interface ICheckboxProps {
    name: string;
    value?: string | number | readonly string[];
    labelText: string;
    isDisabled?: boolean;
    isDefaultChecked?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
    labelText,
    name,
    value,
    isDisabled,
    isDefaultChecked,
}) => (
    <S.StyledCheckboxLabel isDisabled={isDisabled}>
        <S.StiledCheckboxHidden
            disabled={isDisabled}
            defaultChecked={isDefaultChecked}
            name={name}
            value={value}
        />
        <S.StyledCheckboxVisible />
        <span>{labelText}</span>
    </S.StyledCheckboxLabel>
);
