import React from 'react';

import {
    StiledCheckboxHidden,
    StyledCheckboxLabel,
    StyledCheckboxVisible,
} from './Checkbox.styled';

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
    <StyledCheckboxLabel isDisabled={isDisabled}>
        <StiledCheckboxHidden
            disabled={isDisabled}
            defaultChecked={isDefaultChecked}
            name={name}
            value={value}
        />
        <StyledCheckboxVisible />
        <span>{labelText}</span>
    </StyledCheckboxLabel>
);
