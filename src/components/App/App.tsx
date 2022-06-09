import React from 'react';
import { StyledButton } from 'atomic/StyledButton';
import { StyledInput } from 'atomic/StyledInput';

import { Checkbox } from 'components/Checkbox';

export const App: React.FC = () => {
    return (
        <>
            <StyledButton width="300px">Catalog</StyledButton>
            <StyledInput type="text" placeholder="Барсик" width="300px" />
            <StyledInput type="email" placeholder="email" width="300px" />
            <Checkbox labelText="сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" />
        </>
    );
};
