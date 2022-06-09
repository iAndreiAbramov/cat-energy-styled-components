import React from 'react';

import {
    StiledCheckboxHidden,
    StyledCheckboxLabel,
    StyledCheckboxVisible,
} from './Checkbox.styled';

export interface ICheckboxProps {
    labelText: string;
    isDisabled?: boolean;
    isDefaultChecked?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ labelText, isDisabled, isDefaultChecked }) => (
    <StyledCheckboxLabel isDisabled={isDisabled}>
        <StiledCheckboxHidden disabled={isDisabled} defaultChecked={isDefaultChecked} />
        <StyledCheckboxVisible />
        <span>{labelText}</span>
    </StyledCheckboxLabel>
);
