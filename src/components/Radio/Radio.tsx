import React from 'react';

import { StyledRadioHidden, StyledRadioLabel, StyledRadioVisible } from './Radio.styled';

interface IRadioProps {
    name: string;
    value?: string | number | readonly string[];
    labelText: string;
    isDisabled?: boolean;
    isDefaultChecked?: boolean;
}

export const Radio: React.FC<IRadioProps> = ({
    labelText,
    isDefaultChecked,
    isDisabled,
    name,
    value,
}) => (
    <StyledRadioLabel isDisabled={isDisabled}>
        <StyledRadioHidden
            defaultChecked={isDefaultChecked}
            disabled={isDisabled}
            name={name}
            value={value}
        />
        <StyledRadioVisible />
        {labelText}
    </StyledRadioLabel>
);
