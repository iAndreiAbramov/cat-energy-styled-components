import React from 'react';
import { StyledButton } from 'atomic/StyledButton';

import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';

export const App: React.FC = () => {
    return (
        <>
            <StyledButton width="300px">Catalog</StyledButton>
            <Input type="text" placeholder="Барсик" width="300px" labelText="Name:*" />
            <Input type="email" placeholder="email" width="300px" labelText="Name:*" />
            <Checkbox labelText="сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" />
        </>
    );
};
