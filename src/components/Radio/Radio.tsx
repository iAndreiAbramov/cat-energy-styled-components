import React from 'react';

import * as S from './Radio.styled';

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
    <S.RadioLabel isDisabled={isDisabled}>
        <S.RadioHidden
            defaultChecked={isDefaultChecked}
            disabled={isDisabled}
            name={name}
            value={value}
        />
        <S.RadioVisible />
        {labelText}
    </S.RadioLabel>
);
